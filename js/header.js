/* ===== Header / Navigation Module ===== */
const Header = (() => {
  function init() {
    /* Scroll behavior */
    const header = document.getElementById('site-header');
    if (header) {
      const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* Hamburger / mobile nav */
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
      });
      mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    /* Active nav link */
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(a => {
      const href = a.getAttribute('href')?.split('/').pop() || '';
      if (href === path || (path === 'index.html' && href === '')) {
        a.classList.add('active');
      }
    });

    /* Scroll progress */
    const progress = document.getElementById('scroll-progress');
    if (progress) {
      window.addEventListener('scroll', () => {
        const total  = document.documentElement.scrollHeight - window.innerHeight;
        const pct    = total > 0 ? (window.scrollY / total) * 100 : 0;
        progress.style.width = pct + '%';
      }, { passive: true });
    }

    /* Back to top */
    const btt = document.getElementById('back-to-top');
    if (btt) {
      window.addEventListener('scroll', () => {
        btt.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* Intersection observer for fade-ins */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
  }

  return { init };
})();

window.Header = Header;
