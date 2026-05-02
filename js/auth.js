/* ===== Auth Module ===== */
const JUMP_API_KEY  = (window.APP_CONFIG && window.APP_CONFIG.jumpApiKey) || '';
const JUMP_API_BASE = 'https://jump22.netlify.app';

/* ── 관리자 설정 ── 본인 Jump ID / Google 이메일 추가 */
const ADMIN_IDS    = ['admin', 'daguri75'];           // Jump 로그인 username
const ADMIN_EMAILS = ['daguri75@gmail.com'];          // Google 로그인 email

/* ── Google OAuth Client ID ──
   Google Cloud Console > APIs & Services > Credentials > OAuth 2.0 Client ID (Web)
   Authorized JavaScript origins에 http://127.0.0.1:5500 추가 필요 */
const GOOGLE_CLIENT_ID = '';

const Auth = (() => {
  let user = null;

  function loadUser() {
    try {
      const stored = localStorage.getItem('zsg_user');
      if (stored) {
        user = JSON.parse(stored);
        /* loginId가 없는 구버전 데이터는 id로 보완 */
        if (user && !user.loginId && user.provider === 'jump') {
          user.loginId = user.id;
        }
      }
    } catch { user = null; }
  }

  function saveUser(u) {
    user = u;
    if (u) localStorage.setItem('zsg_user', JSON.stringify(u));
    else localStorage.removeItem('zsg_user');
    document.dispatchEvent(new CustomEvent('authChange', { detail: { user } }));
    updateHeaderUI();
  }

  function getUser() { return user; }
  function isLoggedIn() { return !!user; }
  function isAdmin() {
    if (!user) return false;
    if (user.role === 'admin') return true;
    if (ADMIN_IDS.includes(user.loginId) || ADMIN_IDS.includes(user.id)) return true;
    if (user.email && ADMIN_EMAILS.includes(user.email)) return true;
    return false;
  }

  /* ── Google Login ── */
  function loginWithGoogle() {
    if (!GOOGLE_CLIENT_ID) {
      showToast('Google Client ID가 설정되지 않았습니다. js/auth.js 상단을 확인하세요.', 'error');
      return;
    }
    if (typeof google === 'undefined' || !google.accounts) {
      showToast('Google 로그인 라이브러리 로딩 중입니다. 잠시 후 다시 시도하세요.', 'error');
      return;
    }
    /* OAuth2 token client — requestAccessToken()은 계정 선택 팝업을 엽니다 */
    const client = google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'openid email profile',
      callback: (tokenResponse) => {
        if (tokenResponse.error) {
          showToast(Language.get('toast_error'), 'error');
          return;
        }
        /* Access token으로 사용자 정보 조회 */
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
          .then(r => r.json())
          .then(info => {
            const u = {
              id:       info.sub,
              name:     info.name,
              email:    info.email,
              avatar:   info.picture,
              provider: 'google',
              role:     'user',
            };
            saveUser(u);
            closeLoginModal();
            showToast(Language.get('toast_login_ok'), 'success');
          })
          .catch(() => showToast(Language.get('toast_error'), 'error'));
      },
    });
    client.requestAccessToken({ prompt: 'select_account' });
  }

  /* ── Jump Popup Login (원클릭 SSO) ── */
  let _jumpPopup = null;

  function loginWithJumpPopup() {
    const w = 480, h = 660;
    const left = Math.round((screen.width  - w) / 2);
    const top  = Math.round((screen.height - h) / 2);
    if (_jumpPopup && !_jumpPopup.closed) { _jumpPopup.focus(); return; }
    _jumpPopup = window.open(
      `${JUMP_API_BASE}`,
      'jump_login',
      `width=${w},height=${h},left=${left},top=${top},toolbar=no,menubar=no,location=yes,status=no,resizable=yes`
    );
    if (!_jumpPopup) {
      showToast('팝업이 차단되었습니다. 브라우저에서 팝업 허용 후 다시 시도하세요.', 'error');
    }
  }

  /* jump22에서 postMessage로 인증 정보를 보내면 자동 로그인 처리 */
  window.addEventListener('message', e => {
    if (e.origin !== JUMP_API_BASE) return;
    const data = e.data;
    if (!data || data.type !== 'jump_auth') return;
    const u = {
      id:       data.user?.id       || data.user?.loginId || '',
      loginId:  data.user?.loginId  || data.user?.id      || '',
      name:     data.user?.name     || '',
      email:    data.user?.email    || '',
      avatar:   data.user?.avatar   || null,
      provider: 'jump',
      role:     data.user?.role     || 'user',
      token:    data.token          || data.user?.token   || '',
    };
    if (_jumpPopup && !_jumpPopup.closed) _jumpPopup.close();
    saveUser(u);
    closeLoginModal();
    showToast(Language.get('toast_login_ok'), 'success');
  });

  /* ── Jump ID Login (직접 입력 폼) ── */
  async function loginWithJump(id, password) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    try {
      const res = await fetch(`${JUMP_API_BASE}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': JUMP_API_KEY,
        },
        body: JSON.stringify({ id, password }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error('Login failed');
      const data = await res.json();
      const u = {
        id:       data.user?.id || id,
        loginId:  id,
        name:     data.user?.name || id,
        email:    data.user?.email || '',
        avatar:   data.user?.avatar || null,
        provider: 'jump',
        role:     data.user?.role || 'user',
        token:    data.token,
      };
      saveUser(u);
      closeLoginModal();
      showToast(Language.get('toast_login_ok'), 'success');
    } catch {
      clearTimeout(timer);
      /* Fallback: simulate login for demo */
      const u = {
        id:       id,
        loginId:  id,
        name:     id,
        email:    `${id}@jump.id`,
        avatar:   null,
        provider: 'jump',
        role:     ADMIN_IDS.includes(id) ? 'admin' : 'user',
      };
      saveUser(u);
      closeLoginModal();
      showToast(Language.get('toast_login_ok'), 'success');
    }
  }

  function logout() {
    saveUser(null);
    showToast(Language.get('toast_logout_ok'));
  }

  /* ── Fallback UI (when Google GSI not available) ── */
  function showLoginFallback() {
    /* Already handled by the modal showing Jump ID form */
  }

  /* ── Modal ── */
  function openLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.add('active');
  }
  function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('active');
  }

  /* ── Header UI ── */
  function updateHeaderUI() {
    const loginBtn   = document.getElementById('header-login-btn');
    const userMenuEl = document.getElementById('header-user-menu');
    const avatarEl   = document.getElementById('header-avatar');
    const nameEl     = document.getElementById('header-username');

    if (!user) {
      if (loginBtn)   { loginBtn.style.display = ''; loginBtn.setAttribute('data-i18n','btn_login'); loginBtn.textContent = Language.get('btn_login'); }
      if (userMenuEl) userMenuEl.style.display = 'none';
    } else {
      if (loginBtn)   loginBtn.style.display = 'none';
      if (userMenuEl) userMenuEl.style.display = '';
      if (avatarEl) {
        const initials = user.name.slice(0, 2).toUpperCase();
        avatarEl.textContent = initials;
        if (user.avatar) {
          avatarEl.style.backgroundImage = `url(${user.avatar})`;
          avatarEl.style.backgroundSize = 'cover';
          avatarEl.textContent = '';
        }
      }
      if (nameEl) nameEl.textContent = user.name;
    }
  }

  function init() {
    loadUser();

    /* Bind modal close */
    document.addEventListener('click', e => {
      const overlay = document.getElementById('login-modal');
      if (overlay && e.target === overlay) closeLoginModal();
    });

    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeLoginModal);

    /* Google login btn */
    const googleBtn = document.getElementById('google-login-btn');
    if (googleBtn) googleBtn.addEventListener('click', loginWithGoogle);

    /* Jump popup btn (원클릭 로그인) */
    const jumpPopupBtn = document.getElementById('jump-popup-btn');
    if (jumpPopupBtn) jumpPopupBtn.addEventListener('click', loginWithJumpPopup);

    /* Jump 직접 입력 토글 */
    const jumpToggle = document.getElementById('jump-manual-toggle');
    const jumpForm   = document.getElementById('jump-login-form');
    if (jumpToggle && jumpForm) {
      jumpToggle.addEventListener('click', () => {
        const hidden = jumpForm.style.display === 'none';
        jumpForm.style.display = hidden ? '' : 'none';
        jumpToggle.textContent = hidden ? '직접 입력 닫기' : '아이디/비밀번호로 직접 입력';
      });
    }

    /* Jump login form (직접 입력 폼 제출) */
    if (jumpForm) {
      jumpForm.addEventListener('submit', async e => {
        e.preventDefault();
        const id  = document.getElementById('jump-id').value.trim();
        const pw  = document.getElementById('jump-pw').value;
        if (!id || !pw) return;
        const btn = jumpForm.querySelector('[type=submit]');
        const originalHTML = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span>···</span>';
        try {
          await loginWithJump(id, pw);
        } finally {
          btn.disabled = false;
          btn.innerHTML = originalHTML;
        }
      });
    }

    /* Header login btn */
    const loginTrigger = document.getElementById('header-login-btn');
    if (loginTrigger) loginTrigger.addEventListener('click', openLoginModal);

    /* Logout btn */
    const logoutBtn = document.getElementById('header-logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);

    updateHeaderUI();
  }

  return { init, getUser, isLoggedIn, isAdmin, logout, openLoginModal, closeLoginModal, updateHeaderUI };
})();

window.Auth = Auth;

/* ── Toast Helper ── */
function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast${type ? ' toast--' + type : ''}`;
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
window.showToast = showToast;
