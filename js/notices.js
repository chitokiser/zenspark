/* ===== Notices Module — Firebase Firestore + Storage ===== */

const FIREBASE_CONFIG = {
  apiKey:            'AIzaSyD6oGXWcQIAa46ZiO6E9fBWOXqiNCAL4-c',
  authDomain:        'jumper-b15aa.firebaseapp.com',
  projectId:         'jumper-b15aa',
  storageBucket:     'jumper-b15aa.firebasestorage.app',
  messagingSenderId: '1051842479371',
  appId:             '1:1051842479371:web:cd0dca2c1eab0e44b58e0e',
};

const Notices = (() => {
  let db, storage, auth;
  let _cache       = [];
  let _editingId   = null;
  let _keepImgUrl  = null;

  /* ── Firebase 초기화 ── */
  function initFirebase() {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db      = firebase.firestore();
    storage = firebase.storage();
    auth    = firebase.auth();
  }

  /* ── Firestore 쓰기 전 익명 로그인으로 인증 확보 ── */
  async function ensureAuth() {
    if (!auth.currentUser) {
      await auth.signInAnonymously();
    }
  }

  /* ── Firestore CRUD ── */
  async function fetchAll(limit = 9) {
    const snap = await db.collection('notices')
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async function saveNew({ title, content, imageUrl, author }) {
    return db.collection('notices').add({
      title, content, imageUrl: imageUrl || null, author,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  async function saveEdit(id, { title, content, imageUrl }) {
    return db.collection('notices').doc(id).update({
      title, content, imageUrl: imageUrl || null,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  async function removeDoc(id) {
    return db.collection('notices').doc(id).delete();
  }

  /* ── 이미지 업로드 ── */
  async function uploadImage(file) {
    const ext = file.name.split('.').pop();
    const ref = storage.ref(`notices/${Date.now()}.${ext}`);
    await ref.put(file);
    return ref.getDownloadURL();
  }

  /* ── 렌더링 ── */
  function formatDate(ts) {
    if (!ts) return '';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function buildCard(n) {
    const isAdmin = window.Auth && Auth.isAdmin();
    const adminBar = isAdmin ? `
      <div class="notice-card__admin">
        <button class="notice-admin-btn" onclick="Notices.openEdit('${n.id}');event.stopPropagation()">수정</button>
        <button class="notice-admin-btn notice-admin-btn--del" onclick="Notices.confirmDelete('${n.id}');event.stopPropagation()">삭제</button>
      </div>` : '';

    return `
      <article class="notice-card fade-in" onclick="Notices.openDetail('${n.id}')">
        <div class="notice-card__thumb">
          ${n.imageUrl
            ? `<img src="${n.imageUrl}" alt="${n.title}" loading="lazy">`
            : `<div class="notice-card__no-img">☯</div>`}
        </div>
        <div class="notice-card__body">
          <div class="notice-card__date">${formatDate(n.createdAt)}</div>
          <h3 class="notice-card__title">${n.title}</h3>
          <p class="notice-card__excerpt">${(n.content || '').slice(0, 110)}${(n.content || '').length > 110 ? '…' : ''}</p>
        </div>
        ${adminBar}
      </article>`;
  }

  function showCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!_cache.length) {
      container.innerHTML = `<p class="notices-empty">등록된 공지사항이 없습니다.</p>`;
      return;
    }
    container.innerHTML = `<div class="notices-grid">${_cache.map(buildCard).join('')}</div>`;
    requestAnimationFrame(() => {
      container.querySelectorAll('.fade-in').forEach((el, i) =>
        setTimeout(() => el.classList.add('visible'), i * 80));
    });
  }

  async function render(containerId = 'notices-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = `<div class="notices-loading"><div class="spinner"></div><span>불러오는 중…</span></div>`;
    try {
      _cache = await fetchAll(9);
      showCards(containerId);
    } catch (err) {
      console.error('Notices:', err);
      container.innerHTML = `<p class="notices-empty">공지사항을 불러올 수 없습니다.</p>`;
    }
  }

  /* ── 상세 모달 ── */
  function openDetail(id) {
    const n = _cache.find(x => x.id === id);
    if (!n) return;
    const content = document.getElementById('notice-detail-content');
    if (!content) return;
    content.innerHTML = `
      ${n.imageUrl ? `<img src="${n.imageUrl}" class="notice-detail__img" alt="${n.title}">` : ''}
      <div class="notice-detail__meta">
        <span class="notice-card__date">${formatDate(n.createdAt)}</span>
        ${n.author ? `<span class="notice-detail__author">${n.author}</span>` : ''}
      </div>
      <h2 class="notice-detail__title">${n.title}</h2>
      <div class="notice-detail__body">${(n.content || '').replace(/\n/g, '<br>')}</div>`;
    document.getElementById('notice-detail-modal').classList.add('active');
  }

  /* ── 작성/수정 모달 ── */
  function resetWriteForm() {
    document.getElementById('notice-title-input').value   = '';
    document.getElementById('notice-content-input').value = '';
    document.getElementById('notice-image-input').value   = '';
    setPreview(null);
    _keepImgUrl = null;
    _editingId  = null;
  }

  function setPreview(src) {
    const prev = document.getElementById('image-preview');
    const ph   = document.getElementById('image-placeholder');
    const rmBtn = document.getElementById('image-remove-btn');
    if (src) {
      prev.src = src; prev.style.display = 'block';
      ph.style.display = 'none';
      if (rmBtn) rmBtn.style.display = '';
    } else {
      prev.style.display = 'none';
      ph.style.display   = '';
      if (rmBtn) rmBtn.style.display = 'none';
    }
  }

  function openWrite() {
    if (!window.Auth || !Auth.isLoggedIn()) { Auth.openLoginModal(); return; }
    resetWriteForm();
    document.getElementById('notice-modal-label').textContent = '공지 작성';
    document.getElementById('notice-write-modal').classList.add('active');
  }

  function openEdit(id) {
    const n = _cache.find(x => x.id === id);
    if (!n) return;
    _editingId  = id;
    _keepImgUrl = n.imageUrl || null;
    document.getElementById('notice-title-input').value   = n.title;
    document.getElementById('notice-content-input').value = n.content || '';
    document.getElementById('notice-image-input').value   = '';
    setPreview(_keepImgUrl);
    document.getElementById('notice-modal-label').textContent = '공지 수정';
    document.getElementById('notice-write-modal').classList.add('active');
  }

  async function submit() {
    const title   = document.getElementById('notice-title-input').value.trim();
    const content = document.getElementById('notice-content-input').value.trim();
    const file    = document.getElementById('notice-image-input').files[0];
    if (!title) { showToast('제목을 입력하세요.', 'error'); return; }

    const btn = document.getElementById('notice-submit-btn');
    const orig = btn.innerHTML;
    btn.disabled = true; btn.innerHTML = '···';

    try {
      await ensureAuth();
      let imageUrl = _keepImgUrl;
      if (file) {
        showToast('이미지 업로드 중…');
        imageUrl = await uploadImage(file);
      }
      const user = window.Auth ? Auth.getUser() : null;

      if (_editingId) {
        await saveEdit(_editingId, { title, content, imageUrl });
        showToast('공지가 수정되었습니다.', 'success');
      } else {
        await saveNew({ title, content, imageUrl, author: user?.name || 'Admin' });
        showToast('공지가 등록되었습니다.', 'success');
      }
      document.getElementById('notice-write-modal').classList.remove('active');
      await render();
    } catch (err) {
      console.error(err);
      showToast('저장 중 오류가 발생했습니다.', 'error');
    } finally {
      btn.disabled = false; btn.innerHTML = orig;
    }
  }

  async function confirmDelete(id) {
    if (!confirm('이 공지를 삭제하시겠습니까?')) return;
    try {
      await ensureAuth();
      await removeDoc(id);
      showToast('공지가 삭제되었습니다.', 'success');
      await render();
    } catch {
      showToast('삭제 중 오류가 발생했습니다.', 'error');
    }
  }

  /* ── 관리자 버튼 토글 ── */
  function updateAdminUI() {
    const btn = document.getElementById('notice-write-btn');
    if (btn) btn.style.display = (window.Auth && Auth.isAdmin()) ? '' : 'none';
  }

  /* ── 이벤트 바인딩 ── */
  function bindEvents() {
    /* 닫기 */
    ['notice-modal-close', 'notice-cancel-btn'].forEach(id =>
      document.getElementById(id)?.addEventListener('click', () =>
        document.getElementById('notice-write-modal').classList.remove('active')));

    document.getElementById('notice-detail-close')?.addEventListener('click', () =>
      document.getElementById('notice-detail-modal').classList.remove('active'));

    /* 오버레이 클릭 닫기 */
    ['notice-write-modal', 'notice-detail-modal'].forEach(id =>
      document.getElementById(id)?.addEventListener('click', e => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
      }));

    /* 제출 */
    document.getElementById('notice-submit-btn')?.addEventListener('click', submit);

    /* 이미지 업로드 클릭 */
    document.getElementById('image-upload-area')?.addEventListener('click', e => {
      if (e.target.id === 'image-remove-btn') return;
      document.getElementById('notice-image-input').click();
    });

    /* 파일 선택 → 미리보기 */
    document.getElementById('notice-image-input')?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => { _keepImgUrl = null; setPreview(ev.target.result); };
      reader.readAsDataURL(file);
    });

    /* 이미지 제거 버튼 */
    document.getElementById('image-remove-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      _keepImgUrl = null;
      document.getElementById('notice-image-input').value = '';
      setPreview(null);
    });

    /* 관리자 상태 변화 감지 */
    document.addEventListener('authChange', updateAdminUI);
  }

  /* ── 진입점 ── */
  async function init() {
    initFirebase();
    bindEvents();
    updateAdminUI();
    await render();
  }

  return { init, render, openWrite, openEdit, openDetail, confirmDelete };
})();

window.Notices = Notices;
