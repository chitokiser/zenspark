/* ===== Language / i18n Module ===== */
const TRANSLATIONS = {
  ko: {
    /* Header */
    nav_intro:      '소개',
    nav_community:  '커뮤니티',
    nav_services:   '서비스',
    btn_login:      '로그인',
    btn_logout:     '로그아웃',
    btn_mypage:     '마이페이지',

    /* Hero */
    hero_badge:   'Zen • Art • Commerce',
    hero_title1:  'Awaken',
    hero_title2:  'in a Spark',
    hero_tagline: '선(禪)의 정신이 깃든 예술과 체험의 공간',
    hero_cta1:    '체험하기',
    hero_cta2:    '서비스 보기',
    hero_scroll:  'Scroll',

    /* Notices */
    notices_label:  '공지사항',
    notices_title:  '최신 소식',
    notices_desc:   'Zen Spark Gallery의 새로운 소식과 이벤트를 만나보세요.',
    notices_more:   '더보기',
    notices_loading:'소식을 불러오는 중...',
    notices_empty:  '등록된 소식이 없습니다.',
    notices_error:  '소식을 불러오지 못했습니다.',

    /* Map */
    map_label:   '오시는 길',
    map_title:   'Yen Tu 위치',
    map_desc:    '베트남 꽝닌성 옌뚜산 — 선불교의 성지',
    map_address: '옌뚜산, 동찌에우, 꽝닌성, 베트남',
    map_hours:   '연중무휴 08:00 — 18:00',

    /* Services */
    svc_label:       '서비스',
    svc_title:       '체험 & 커머스',
    svc_desc:        '마음을 깨우는 다양한 체험과 상품을 만나보세요.',
    svc_mypage:      '마이 페이지',
    svc_mypage_desc: '나의 예약, 구매 내역, 프로필을 관리합니다.',
    svc_organic:     'Zen 유기농 꾸러미',
    svc_organic_desc:'자연에서 온 유기농 제품들을 경험해 보세요.',
    svc_mall:        'Zen Mall',
    svc_mall_desc:   '선 철학이 담긴 예술품과 생활용품을 만나보세요.',
    svc_voucher:     'Zen Voucher',
    svc_voucher_desc:'특별한 체험을 선물로 드려보세요.',
    svc_hotel:       'Zen Spark Hotel',
    svc_hotel_desc:  '자연 속 고요한 숙박 체험을 즐기세요.',
    svc_taxi:        'Yen Tu Taxi',
    svc_taxi_desc:   '옌뚜 셔틀 버기 예약 서비스입니다.',
    svc_coming_soon: '준비 중',
    svc_visit:       '바로가기 →',

    /* Community */
    comm_label:       '커뮤니티',
    comm_title:       '소개 게시판',
    comm_desc:        '방문 후기, 여행 정보, 자유로운 이야기를 나눠보세요.',
    comm_write:       '글쓰기',
    comm_all:         '전체',
    comm_search:      '검색...',
    comm_loading:     '게시글 불러오는 중...',
    comm_empty:       '등록된 게시글이 없습니다.',
    comm_login_req:   '로그인 후 이용하실 수 있습니다.',
    comm_back:        '← 목록으로',
    comm_edit:        '수정',
    comm_delete:      '삭제',
    comm_like:        '좋아요',
    comm_comment:     '댓글',
    comm_comment_ph:  '댓글을 입력하세요...',
    comm_comment_sub: '댓글 등록',
    comm_write_title: '제목을 입력하세요',
    comm_write_cat:   '카테고리 선택',
    comm_write_body:  '내용을 입력하세요...',
    comm_write_submit:'등록하기',
    comm_write_cancel:'취소',
    comm_views:       '조회',
    comm_confirm_del: '게시글을 삭제하시겠습니까?',

    /* Login Modal */
    login_title:    '로그인',
    login_subtitle: '로그인하여 커뮤니티에 참여하세요.',
    login_google:   'Google로 계속하기',
    login_jump:     'Jump ID로 로그인',
    login_or:       '또는',
    login_id:       '아이디',
    login_pw:       '비밀번호',
    login_btn:      '로그인',
    login_close:    '닫기',
    login_no_account: '계정이 없으신가요?',
    login_register: '회원가입',

    /* Footer */
    footer_tagline: 'A space for awakening, art, and mindful living',
    footer_links:   '바로가기',
    footer_contact: '연락처',
    footer_copy:    '© 2024 Zen Spark Gallery. All rights reserved.',
    footer_about:   '소개',
    footer_privacy: '개인정보처리방침',
    footer_terms:   '이용약관',

    /* Toast */
    toast_login_ok:   '로그인되었습니다.',
    toast_logout_ok:  '로그아웃되었습니다.',
    toast_post_ok:    '게시글이 등록되었습니다.',
    toast_del_ok:     '삭제되었습니다.',
    toast_comment_ok: '댓글이 등록되었습니다.',
    toast_like_ok:    '좋아요를 눌렀습니다.',
    toast_login_first:'먼저 로그인해 주세요.',
    toast_error:      '오류가 발생했습니다.',
  },
  en: {
    /* Header */
    nav_intro:      'About',
    nav_community:  'Community',
    nav_services:   'Services',
    btn_login:      'Login',
    btn_logout:     'Logout',
    btn_mypage:     'My Page',

    /* Hero */
    hero_badge:   'Zen • Art • Commerce',
    hero_title1:  'Awaken',
    hero_title2:  'in a Spark',
    hero_tagline: 'A space for awakening, art, and mindful living',
    hero_cta1:    'Explore',
    hero_cta2:    'View Services',
    hero_scroll:  'Scroll',

    /* Notices */
    notices_label:  'News',
    notices_title:  'Latest Updates',
    notices_desc:   'Discover the latest news and events from Zen Spark Gallery.',
    notices_more:   'View All',
    notices_loading:'Loading updates...',
    notices_empty:  'No updates available.',
    notices_error:  'Failed to load updates.',

    /* Map */
    map_label:   'Location',
    map_title:   'Find Us at Yen Tu',
    map_desc:    'Yen Tu Mountain, Quang Ninh Province — a sacred site of Vietnamese Buddhism',
    map_address: 'Yen Tu Mountain, Dong Trieu, Quang Ninh, Vietnam',
    map_hours:   'Open daily 08:00 — 18:00',

    /* Services */
    svc_label:       'Services',
    svc_title:       'Experience & Commerce',
    svc_desc:        'Explore mindful experiences and curated products.',
    svc_mypage:      'My Page',
    svc_mypage_desc: 'Manage your bookings, purchases, and profile.',
    svc_organic:     'Zen Organic Bundle',
    svc_organic_desc:'Experience organic products straight from nature.',
    svc_mall:        'Zen Mall',
    svc_mall_desc:   'Discover art and lifestyle goods imbued with Zen philosophy.',
    svc_voucher:     'Zen Voucher',
    svc_voucher_desc:'Give the gift of a mindful experience.',
    svc_hotel:       'Zen Spark Hotel',
    svc_hotel_desc:  'Enjoy a peaceful stay immersed in nature.',
    svc_taxi:        'Yen Tu Taxi',
    svc_taxi_desc:   'Book a buggy shuttle to Yen Tu.',
    svc_coming_soon: 'Coming Soon',
    svc_visit:       'Visit →',

    /* Community */
    comm_label:       'Community',
    comm_title:       'Community Board',
    comm_desc:        'Share your visit stories, travel tips, and thoughts.',
    comm_write:       'Write Post',
    comm_all:         'All',
    comm_search:      'Search...',
    comm_loading:     'Loading posts...',
    comm_empty:       'No posts yet.',
    comm_login_req:   'Please log in to continue.',
    comm_back:        '← Back to List',
    comm_edit:        'Edit',
    comm_delete:      'Delete',
    comm_like:        'Like',
    comm_comment:     'Comment',
    comm_comment_ph:  'Write a comment...',
    comm_comment_sub: 'Submit',
    comm_write_title: 'Post title',
    comm_write_cat:   'Select category',
    comm_write_body:  'Write your content here...',
    comm_write_submit:'Publish',
    comm_write_cancel:'Cancel',
    comm_views:       'Views',
    comm_confirm_del: 'Are you sure you want to delete this post?',

    /* Login Modal */
    login_title:    'Login',
    login_subtitle: 'Sign in to join the community.',
    login_google:   'Continue with Google',
    login_jump:     'Login with Jump ID',
    login_or:       'or',
    login_id:       'ID',
    login_pw:       'Password',
    login_btn:      'Login',
    login_close:    'Close',
    login_no_account: 'Don\'t have an account?',
    login_register: 'Register',

    /* Footer */
    footer_tagline: 'A space for awakening, art, and mindful living',
    footer_links:   'Links',
    footer_contact: 'Contact',
    footer_copy:    '© 2024 Zen Spark Gallery. All rights reserved.',
    footer_about:   'About',
    footer_privacy: 'Privacy Policy',
    footer_terms:   'Terms of Use',

    /* Toast */
    toast_login_ok:   'Logged in successfully.',
    toast_logout_ok:  'Logged out.',
    toast_post_ok:    'Post published.',
    toast_del_ok:     'Deleted.',
    toast_comment_ok: 'Comment added.',
    toast_like_ok:    'Liked!',
    toast_login_first:'Please log in first.',
    toast_error:      'An error occurred.',
  }
};

const Language = (() => {
  let current = localStorage.getItem('zsg_lang') || 'ko';

  function get(key) {
    return (TRANSLATIONS[current] && TRANSLATIONS[current][key])
      || (TRANSLATIONS['ko'] && TRANSLATIONS['ko'][key])
      || key;
  }

  function set(lang) {
    current = lang;
    localStorage.setItem('zsg_lang', lang);
    apply();
    document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
  }

  function apply() {
    /* data-i18n attributes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = get(key);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = get(el.getAttribute('data-i18n-ph'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = get(el.getAttribute('data-i18n-title'));
    });
    /* Lang buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === current);
    });
    /* html lang attribute */
    document.documentElement.lang = current;
  }

  function init() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => set(btn.dataset.lang));
    });
    apply();
  }

  return { get, set, current: () => current, init, apply };
})();

window.Language = Language;
