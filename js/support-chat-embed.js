// js/support-chat-embed.js — 로컬 복사본 (CORS 우회)
// 사전 조건: window.__jumpChat = { db: Firestore인스턴스, auth: Auth인스턴스 }

import {
  collection, doc, addDoc, onSnapshot, orderBy, query,
  serverTimestamp, setDoc, updateDoc, getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const CSS = `
#__jc-btn {
  position:fixed;bottom:20px;right:20px;z-index:9998;
  background:#2563eb;color:#fff;border:none;border-radius:24px;
  padding:10px 18px;font-size:14px;font-weight:600;cursor:pointer;
  box-shadow:0 2px 8px rgba(0,0,0,.25);font-family:sans-serif;
}
#__jc-btn.has-badge { position:fixed; }
#__jc-btn.has-badge::after {
  content:attr(data-badge);position:absolute;top:-6px;right:-6px;
  background:#ef4444;color:#fff;border-radius:10px;padding:2px 6px;
  font-size:11px;font-weight:700;min-width:18px;text-align:center;
}
#__jc-widget {
  position:fixed;bottom:75px;right:20px;width:320px;z-index:9999;
  background:#fff;border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,.2);
  display:flex;flex-direction:column;overflow:hidden;font-family:sans-serif;
}
#__jc-widget.hidden { display:none!important; }
.__jc-hdr {
  background:#2563eb;color:#fff;padding:12px 14px;
  display:flex;align-items:center;gap:8px;
}
.__jc-title { font-size:14px;font-weight:700;flex:1; }
.__jc-status { font-size:12px; }
.__jc-close { background:none;border:none;color:#fff;cursor:pointer;font-size:18px;line-height:1; }
.__jc-msgs {
  flex:1;overflow-y:auto;padding:10px 12px;
  display:flex;flex-direction:column;gap:6px;max-height:280px;min-height:80px;
}
.__jc-msg { display:flex;flex-direction:column;max-width:78%; }
.__jc-msg--user { align-self:flex-end;align-items:flex-end; }
.__jc-msg--admin { align-self:flex-start;align-items:flex-start; }
.__jc-text {
  padding:8px 12px;border-radius:16px;font-size:13px;
  line-height:1.4;word-break:break-word;
}
.__jc-msg--user .__jc-text { background:#2563eb;color:#fff; }
.__jc-msg--admin .__jc-text { background:#f1f5f9;color:#1e293b; }
.__jc-time { font-size:10px;color:#94a3b8;margin-top:2px; }
.__jc-form {
  display:flex;gap:6px;padding:10px 12px;border-top:1px solid #e2e8f0;
}
.__jc-input {
  flex:1;padding:8px 12px;border:1px solid #cbd5e1;border-radius:20px;
  font-size:13px;outline:none;
}
.__jc-input:focus { border-color:#2563eb; }
.__jc-send {
  background:#2563eb;color:#fff;border:none;border-radius:20px;
  padding:8px 14px;font-size:13px;font-weight:600;cursor:pointer;
}
.__jc-notice { font-size:13px;color:#64748b;text-align:center;padding:20px 12px; }
.__jc-login-btn {
  display:inline-block;margin-top:10px;padding:8px 18px;
  background:#2563eb;color:#fff;border:none;border-radius:20px;
  font-size:13px;font-weight:600;cursor:pointer;
}
@media(max-width:460px){
  #__jc-widget { width:calc(100vw - 24px);right:12px; }
}
`;

function esc(s) {
  return String(s ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function injectCSS() {
  if (document.getElementById("__jc-style")) return;
  const s = document.createElement("style");
  s.id = "__jc-style";
  s.textContent = CSS;
  document.head.appendChild(s);
}

function injectHTML() {
  if (document.getElementById("__jc-btn")) return;

  const btn = document.createElement("button");
  btn.id = "__jc-btn";
  btn.type = "button";
  btn.textContent = "💬 1:1 채팅";
  document.body.appendChild(btn);

  const w = document.createElement("div");
  w.id = "__jc-widget";
  w.className = "hidden";
  w.setAttribute("role", "dialog");
  w.innerHTML = `
    <div class="__jc-hdr">
      <span class="__jc-title">💬 1:1 채팅 문의</span>
      <span id="__jcStatus" class="__jc-status">🔴 오프라인</span>
      <button class="__jc-close" id="__jcClose" type="button" aria-label="닫기">✕</button>
    </div>
    <div class="__jc-msgs" id="__jcMsgs"></div>
    <form class="__jc-form" id="__jcForm">
      <input class="__jc-input" id="__jcInput" type="text"
        placeholder="메시지를 입력하세요..." autocomplete="off" maxlength="500" />
      <button class="__jc-send" type="submit">전송</button>
    </form>`;
  document.body.appendChild(w);
}

let _uid = null;
let _isOpen = false;
let _unsubMsgs = null;
let _unreadRefs = [];

async function init() {
  let cfg = null;
  for (let i = 0; i < 100; i++) {
    if (window.__jumpChat?.db && window.__jumpChat?.auth) { cfg = window.__jumpChat; break; }
    await new Promise(r => setTimeout(r, 50));
  }
  if (!cfg) {
    console.warn("[jump-chat] window.__jumpChat = { db, auth } 설정이 필요합니다.");
    return;
  }

  injectCSS();
  injectHTML();

  const { db, auth } = cfg;

  const btn    = document.getElementById("__jc-btn");
  const widget = document.getElementById("__jc-widget");
  const msgs   = document.getElementById("__jcMsgs");
  const status = document.getElementById("__jcStatus");

  onSnapshot(doc(db, "admin_status", "main"), (snap) => {
    const on = snap.exists() && snap.data().online === true;
    if (status) status.textContent = on ? "🟢 온라인" : "🔴 오프라인";
  });

  btn.addEventListener("click", () => {
    _isOpen = !_isOpen;
    widget.classList.toggle("hidden", !_isOpen);
    if (_isOpen) {
      clearBadge(btn);
      markRead(db);
      setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 30);
    }
  });

  document.getElementById("__jcClose")?.addEventListener("click", () => {
    _isOpen = false;
    widget.classList.add("hidden");
  });

  document.getElementById("__jcForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("__jcInput");
    const text = input?.value.trim();
    if (!text || !_uid) return;
    input.value = "";
    await sendMsg(db, _uid, text);
  });

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      _uid = null;
      _unsubMsgs?.(); _unsubMsgs = null;
      if (msgs) {
        const alreadyLoggedIn = window.Auth?.isLoggedIn?.();
        if (alreadyLoggedIn) {
          msgs.innerHTML = `<div class="__jc-notice">채팅을 불러오는 중…</div>`;
        } else {
          msgs.innerHTML = `
            <div class="__jc-notice">
              로그인 후 이용 가능합니다.<br>
              <button class="__jc-login-btn" onclick="window.Auth?.openLoginModal?.()">로그인</button>
            </div>`;
        }
      }
      return;
    }
    if (_uid === user.uid) return;
    _uid = user.uid;

    const chatRef = doc(db, "support_chats", user.uid);
    const snap = await getDoc(chatRef);
    if (!snap.exists()) {
      await setDoc(chatRef, {
        uid: user.uid,
        displayName: user.displayName || "",
        email: user.email || "",
        lastMessage: "",
        lastAt: serverTimestamp(),
        hasUnread: false,
      });
    }

    _unsubMsgs?.(); _unsubMsgs = null;

    _unsubMsgs = onSnapshot(
      query(collection(db, "support_chats", user.uid, "messages"), orderBy("createdAt", "asc")),
      (snap) => {
        renderMsgs(snap.docs, msgs);
        _unreadRefs = snap.docs
          .filter(d => d.data().sender === "admin" && !d.data().readByUser)
          .map(d => d.ref);

        if (_unreadRefs.length > 0 && !_isOpen) {
          btn.dataset.badge = _unreadRefs.length > 9 ? "9+" : String(_unreadRefs.length);
          btn.classList.add("has-badge");
        } else {
          clearBadge(btn);
        }

        if (_isOpen && _unreadRefs.length > 0) markRead(db);
      }
    );
  });
}

function renderMsgs(docs, el) {
  if (!el) return;
  if (!docs.length) {
    el.innerHTML = `<div class="__jc-notice">메시지가 없습니다.<br>문의 내용을 입력해 주세요.</div>`;
    return;
  }
  let html = "";
  for (const d of docs) {
    const { text, sender, createdAt } = d.data();
    const t = createdAt
      ? new Date(createdAt.seconds * 1000).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })
      : "";
    const side = sender === "admin" ? "__jc-msg--admin" : "__jc-msg--user";
    html += `<div class="__jc-msg ${side}">
      <span class="__jc-text">${esc(text)}</span>
      <span class="__jc-time">${t}</span>
    </div>`;
  }
  el.innerHTML = html;
  el.scrollTop = el.scrollHeight;
}

async function sendMsg(db, uid, text) {
  await addDoc(collection(db, "support_chats", uid, "messages"), {
    text, sender: "user", createdAt: serverTimestamp(), readByUser: true,
  });
  await updateDoc(doc(db, "support_chats", uid), {
    lastMessage: text, lastAt: serverTimestamp(), hasUnread: true,
  });
}

function markRead(db) {
  if (!_unreadRefs.length) return;
  const refs = [..._unreadRefs];
  _unreadRefs = [];
  Promise.all(refs.map(r => updateDoc(r, { readByUser: true }))).catch(() => {});
}

function clearBadge(btn) {
  btn.dataset.badge = "";
  btn.classList.remove("has-badge");
}

init();
