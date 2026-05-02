/* ===== Google Blogger API Module ===== */
const BLOG_ID   = '4135336669564829765';
const BLOG_API  = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`;
const GMAP_KEY  = 'AIzaSyATCVXm6zBZ3ozM5A-GOT6pDJ66LRjPGiQ';

const BlogAPI = (() => {
  async function fetchPosts(maxResults = 6) {
    const url = `${BLOG_API}?key=${GMAP_KEY}&maxResults=${maxResults}&fetchBodies=true&fetchImages=true`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
    return res.json();
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(Language.current() === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  function extractThumb(post) {
    /* Try post images first */
    if (post.images && post.images.length > 0) return post.images[0].url;
    /* Parse from content HTML */
    const m = post.content && post.content.match(/<img[^>]+src="([^"]+)"/);
    return m ? m[1] : null;
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return (tmp.textContent || tmp.innerText || '').trim().slice(0, 150) + '...';
  }

  function renderCard(post) {
    const thumb = extractThumb(post);
    const date  = formatDate(post.published);
    const excerpt = stripHtml(post.content);
    return `
      <article class="notice-card fade-in" onclick="window.open('${post.url}','_blank')">
        <div class="notice-card__thumb">
          ${thumb
            ? `<img src="${thumb}" alt="${post.title}" loading="lazy">`
            : `<div style="width:100%;height:100%;background:var(--gray-5);display:flex;align-items:center;justify-content:center;color:var(--gray-4);font-size:2rem;">☯</div>`}
        </div>
        <div class="notice-card__body">
          <div class="notice-card__date">${date}</div>
          <h3 class="notice-card__title">${post.title}</h3>
          <p class="notice-card__excerpt">${excerpt}</p>
        </div>
      </article>`;
  }

  async function render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `<div class="notices-loading"><div class="spinner"></div><span data-i18n="notices_loading">${Language.get('notices_loading')}</span></div>`;

    try {
      const data  = await fetchPosts(6);
      const posts = data.items || [];

      if (!posts.length) {
        container.innerHTML = `<p class="notices-loading">${Language.get('notices_empty')}</p>`;
        return;
      }

      container.innerHTML = `<div class="notices-grid">${posts.map(renderCard).join('')}</div>`;

      /* Trigger fade-in */
      requestAnimationFrame(() => {
        container.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
      });
    } catch (err) {
      console.warn('Blog API failed, showing mock data:', err);
      renderMock(container);
    }
  }

  function renderMock(container) {
    const mock = [
      { title: 'Zen Spark Gallery 봄 전시 오픈', date: '2024-03-15', excerpt: '봄을 맞아 새로운 전시가 시작되었습니다. 선의 미학과 현대 예술이 만나는 특별한 공간을 경험해 보세요.' },
      { title: 'Yen Tu 케이블카 운행 안내', date: '2024-03-10', excerpt: '옌뚜 케이블카 운행 시간표와 요금 안내입니다. 웅장한 자연 속을 가로지르는 케이블카를 이용해 보세요.' },
      { title: 'Zen 유기농 꾸러미 신제품 출시', date: '2024-03-05', excerpt: '자연에서 온 유기농 제품들로 구성된 새로운 꾸러미가 출시되었습니다. 건강하고 맛있는 선물을 지금 만나보세요.' },
      { title: '죽림 Zen 사원 봄 법회 일정', date: '2024-03-01', excerpt: '봄을 맞이하는 특별한 법회가 진행될 예정입니다. 마음을 다스리는 시간을 함께하세요.' },
      { title: 'M Gallery 작가전 안내', date: '2024-02-25', excerpt: '새로운 작가전이 시작되었습니다. 독창적인 예술 세계를 만나보세요.' },
      { title: 'Zen Spark Hotel 오픈 이벤트', date: '2024-02-20', excerpt: '오픈 기념 특별 이벤트를 진행합니다. 선을 담은 고요한 숙박 체험을 특별한 가격으로 만나보세요.' },
    ];
    container.innerHTML = `<div class="notices-grid">${mock.map((p, i) => `
      <article class="notice-card fade-in fade-in-delay-${(i%4)+1}">
        <div class="notice-card__thumb" style="background:var(--gray-6);display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:3rem;">☯</div>
        <div class="notice-card__body">
          <div class="notice-card__date">${p.date}</div>
          <h3 class="notice-card__title">${p.title}</h3>
          <p class="notice-card__excerpt">${p.excerpt}</p>
        </div>
      </article>`).join('')}</div>`;
    requestAnimationFrame(() => {
      container.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 80);
      });
    });
  }

  return { render, fetchPosts, formatDate };
})();

window.BlogAPI = BlogAPI;
