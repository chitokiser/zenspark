/* ===== Lightbox ===== */
const Lightbox = (() => {
  let overlay, img, caption, closeBtn, prevBtn, nextBtn;
  let images = []; // [{src, alt}]
  let current = 0;

  function build() {
    if (document.getElementById('zsg-lightbox')) return;

    overlay = document.createElement('div');
    overlay.id = 'zsg-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', '이미지 확대보기');
    overlay.innerHTML = `
      <div class="lb-backdrop"></div>
      <button class="lb-close" aria-label="닫기">✕</button>
      <button class="lb-nav lb-prev" aria-label="이전">&#8249;</button>
      <button class="lb-nav lb-next" aria-label="다음">&#8250;</button>
      <div class="lb-content">
        <img class="lb-img" src="" alt="" />
        <p class="lb-caption"></p>
      </div>
    `;
    document.body.appendChild(overlay);

    img      = overlay.querySelector('.lb-img');
    caption  = overlay.querySelector('.lb-caption');
    closeBtn = overlay.querySelector('.lb-close');
    prevBtn  = overlay.querySelector('.lb-prev');
    nextBtn  = overlay.querySelector('.lb-next');

    overlay.querySelector('.lb-backdrop').addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => show(current - 1));
    nextBtn.addEventListener('click', () => show(current + 1));
    document.addEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (!overlay.classList.contains('lb-open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   show(current - 1);
    if (e.key === 'ArrowRight')  show(current + 1);
  }

  function show(idx) {
    if (!images.length) return;
    current = (idx + images.length) % images.length;
    const item = images[current];
    img.src = item.src;
    img.alt = item.alt;
    caption.textContent = item.alt;
    caption.style.display = item.alt ? '' : 'none';
    prevBtn.style.display = images.length > 1 ? '' : 'none';
    nextBtn.style.display = images.length > 1 ? '' : 'none';
    overlay.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('lb-open');
    document.body.style.overflow = '';
    img.src = '';
  }

  function open(src, alt, group) {
    build();
    images = group || [{ src, alt }];
    const idx = images.findIndex(i => i.src === src);
    show(idx >= 0 ? idx : 0);
  }

  /* Auto-bind all [data-lightbox] images on page load */
  function init() {
    build();

    /* Group images by data-lightbox attribute value */
    const allImgs = document.querySelectorAll('[data-lightbox]');
    const groups = {};
    allImgs.forEach(el => {
      const key = el.dataset.lightbox || 'default';
      if (!groups[key]) groups[key] = [];
      groups[key].push({ src: el.src || el.dataset.src, alt: el.alt || el.dataset.alt || '' });
    });

    allImgs.forEach(el => {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', e => {
        e.stopPropagation();
        const key = el.dataset.lightbox || 'default';
        open(el.src || el.dataset.src, el.alt || '', groups[key]);
      });
    });
  }

  return { init, open };
})();

window.Lightbox = Lightbox;
document.addEventListener('DOMContentLoaded', () => Lightbox.init());
