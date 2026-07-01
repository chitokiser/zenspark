/* ===== Language / i18n Module ===== */
const TRANSLATIONS = {
  vi: {
    /* Header */
    nav_intro:      'Giới thiệu',
    nav_community:  'Cộng đồng',
    nav_services:   'Dịch vụ',
    btn_login:      'Đăng nhập',
    btn_logout:     'Đăng xuất',
    btn_mypage:     'Trang cá nhân',

    /* Hero */
    hero_badge:   'Zen • Nghệ thuật • Thương mại',
    hero_title1:  'Thức tỉnh',
    hero_title2:  'trong ánh sáng',
    hero_tagline: 'Không gian nghệ thuật và trải nghiệm mang tinh thần Thiền',
    hero_cta1:    'Khám phá',
    hero_cta2:    'Xem dịch vụ',
    hero_scroll:  'Cuộn',

    /* Notices */
    notices_label:  'Sự kiện',
    notices_title:  'Quyền lợi hội viên',
    notices_desc:   'Khám phá tin tức và sự kiện mới nhất từ Zen Spark Gallery.',
    notices_more:   'Xem thêm',
    notices_loading:'Đang tải...',
    notices_empty:  'Chưa có tin tức.',
    notices_error:  'Không thể tải tin tức.',

    /* Map */
    map_label:   'Địa chỉ',
    map_title:   'Vị trí Yên Tử',
    map_desc:    'Núi Yên Tử, tỉnh Quảng Ninh — thánh địa Phật giáo Việt Nam',
    map_address: 'Núi Yên Tử, Đông Triều, Quảng Ninh, Việt Nam',
    map_hours:   'Mở cửa hàng ngày 08:00 — 18:00',

    /* Services */
    svc_label:        'Dịch vụ',
    svc_title:        'Trải nghiệm & Thương mại',
    svc_desc:         'Khám phá các trải nghiệm và sản phẩm chánh niệm.',
    svc_mypage:       'Trang cá nhân',
    svc_mypage_desc:  'Quản lý đặt chỗ, mua hàng và hồ sơ của bạn.',
    svc_organic:      'Gói hữu cơ Zen',
    svc_organic_desc: 'Trải nghiệm các sản phẩm hữu cơ từ thiên nhiên.',
    svc_mall:         'Zen MemberShip Mall',
    svc_mall_desc:    'Cửa hàng dành riêng cho hội viên.',
    svc_voucher:      'Zen Voucher',
    svc_voucher_desc: 'Tặng quà trải nghiệm chánh niệm đặc biệt.',
    svc_hotel:        'Zen Spark Hotel',
    svc_hotel_desc:   'Tận hưởng kỳ nghỉ yên bình giữa thiên nhiên.',
    svc_taxi:         'Yen Tu Taxi',
    svc_taxi_desc:    'Đặt xe buggy đưa đón tại Yên Tử.',
    svc_treasure:     'Săn kho báu',
    svc_treasure_desc:'Tìm kho báu trên bản đồ đối tác Yên Tử.',
    svc_academy:      'Học viện Thiền',
    svc_academy_desc: 'Chương trình đào tạo 6 cấp độ hướng dẫn viên Thiền chuyên nghiệp.',
    svc_koan:         'KOAN QUEST',
    svc_koan_desc:    'Trải nghiệm Thiền gamification khám phá đối tác Yên Tử.',
    svc_ai_art:       'AI ZEN ART',
    svc_ai_art_desc:  'Sáng tác nghệ thuật số lấy cảm hứng từ triết học Thiền bằng AI.',
    svc_festival:     'Lễ hội Thiền Yên Tử',
    svc_festival_desc:'"Thức tỉnh cùng nhau" — lễ hội Thiền định & văn hóa thường niên.',
    svc_coming_soon:  'Sắp ra mắt',
    svc_inquiry:      'Liên hệ',
    svc_visit:        'Truy cập →',

    /* About - 4 Pillars */
    about_pillar1:      'Trải nghiệm Retreat',
    about_pillar1_desc: '1 đêm đến 1 tháng: Thiền định, yoga & ẩm thực thuần chay',
    about_pillar2:      'Làng Yên Tử',
    about_pillar2_desc: 'Chùa Trúc Lâm · M Gallery · Cáp treo · Hệ sinh thái đối tác',
    about_pillar3:      'Học viện Thiền',
    about_pillar3_desc: '6 cấp độ chứng chỉ, AI Zen Art, KOAN QUEST',
    about_pillar4:      'Lễ hội Zen',
    about_pillar4_desc: '"Thức tỉnh cùng nhau" — sự kiện & mở rộng cộng đồng hàng năm',

    /* Retreat Packages */
    retreat_label:      'Gói Retreat',
    retreat_title:      'Tìm trải nghiệm Thiền phù hợp với bạn',
    retreat_desc:       'Từ 1 đêm giới thiệu đến 1 tháng đắm chìm — kết nối với sự tĩnh lặng tại Yên Tử.',
    retreat_tier1:      'Cắm trại',
    retreat_tier1_sub:  '1 đêm 2 ngày',
    retreat_tier2:      'Lưu trú làng',
    retreat_tier2_sub:  '1 đêm 2 ngày',
    retreat_tier3:      'Cao cấp / VIP',
    retreat_tier3_sub:  '1 đêm 2 ngày',
    retreat_cta:        'Liên hệ đặt chỗ',
    retreat_popular:    'Phổ biến',

    /* Community */
    comm_label:       'Cộng đồng',
    comm_title:       'Bảng cộng đồng',
    comm_desc:        'Chia sẻ cảm nhận, thông tin du lịch và câu chuyện của bạn.',
    comm_write:       'Viết bài',
    comm_all:         'Tất cả',
    comm_search:      'Tìm kiếm...',
    comm_loading:     'Đang tải bài viết...',
    comm_empty:       'Chưa có bài viết nào.',
    comm_login_req:   'Vui lòng đăng nhập để tiếp tục.',
    comm_back:        '← Quay lại danh sách',
    comm_edit:        'Chỉnh sửa',
    comm_delete:      'Xóa',
    comm_like:        'Thích',
    comm_comment:     'Bình luận',
    comm_comment_ph:  'Nhập bình luận...',
    comm_comment_sub: 'Đăng',
    comm_write_title: 'Nhập tiêu đề bài viết',
    comm_write_cat:   'Chọn danh mục',
    comm_write_body:  'Nhập nội dung...',
    comm_write_submit:'Đăng bài',
    comm_write_cancel:'Hủy',
    comm_views:       'Lượt xem',
    comm_confirm_del: 'Bạn có chắc muốn xóa bài viết này không?',

    /* Login Modal */
    login_title:       'Đăng nhập',
    login_subtitle:    'Đăng nhập bằng tài khoản Google của bạn.',
    login_google:      'Tiếp tục với Google',
    login_jump:        'Đăng nhập với Jump ID',
    login_or:          'hoặc',
    login_id:          'Tài khoản',
    login_pw:          'Mật khẩu',
    login_btn:         'Đăng nhập',
    login_close:       'Đóng',
    login_no_account:  'Chưa có tài khoản?',
    login_register:    'Đăng ký',

    /* Footer */
    footer_tagline: 'Không gian thức tỉnh, nghệ thuật và lối sống chánh niệm',
    footer_links:   'Liên kết',
    footer_contact: 'Liên hệ',
    footer_copy:    '© 2024 Zen Spark Gallery. Bảo lưu mọi quyền.',
    footer_about:   'Giới thiệu',
    footer_privacy: 'Chính sách bảo mật',
    footer_terms:   'Điều khoản sử dụng',

    /* Toast */
    toast_login_ok:   'Đăng nhập thành công.',
    toast_logout_ok:  'Đã đăng xuất.',
    toast_post_ok:    'Bài viết đã được đăng.',
    toast_del_ok:     'Đã xóa.',
    toast_comment_ok: 'Bình luận đã được thêm.',
    toast_like_ok:    'Đã thích!',
    toast_login_first:'Vui lòng đăng nhập trước.',
    toast_error:      'Đã xảy ra lỗi.',

    /* About intro */
    about_intro_p1:   'Zen Spark Gallery kết nối trải nghiệm retreat · hệ sinh thái làng · học viện thiền định · lễ hội Zen thành một bánh đà tại thánh địa Phật giáo Yên Tử, Việt Nam.',
    about_intro_p2:   'Nơi công nghệ số gặp gỡ trí tuệ Thiền — mang đến hành trình thức tỉnh hiện đại nhất.',

    /* Heritage × Technology */
    heritage_title:         'Di sản quá khứ × Công nghệ tương lai',
    heritage_desc:          '800 năm thánh địa Phật giáo kết hợp với công nghệ tiên tiến, mở ra hành trình thức tỉnh chưa từng có.',
    heritage_past_label:    'Di sản hùng vĩ của quá khứ',
    heritage_future_label:  'Công nghệ đắm chìm của tương lai',
    heritage_item1_title:   'Chùa Trúc Lâm thế kỷ 13',
    heritage_item1_desc:    'Nơi Phật Hoàng Trần Nhân Tông khai sáng Thiền phái Trúc Lâm. Thánh địa 800 năm im lặng.',
    heritage_item2_title:   'Rừng tre thanh tịnh',
    heritage_item2_desc:    'Con đường rừng nghìn năm dẫn lên đỉnh Yên Tử. Chỉ tiếng gió thì thầm công án.',
    heritage_item3_title:   'Thánh địa 1.068m so với mực nước biển',
    heritage_item3_desc:    'Bầu không khí huyền bí của đỉnh núi sương mù. Nơi hàng trăm nghìn người hành hương mỗi năm.',
    tech_item1_title:       '3D Projection Mapping & Âm thanh không gian',
    tech_item1_desc:        'Nghệ thuật truyền thông Thiền họa trên vách chùa, kết hợp âm thanh đắm chìm không gian.',
    tech_item2_title:       'Gamification AR dựa trên vị trí',
    tech_item2_desc:        'Công án (KOAN) xuất hiện dưới dạng AR trigger, hoàn thành nhiệm vụ thiền để mở khóa phần thưởng.',
    tech_item3_title:       'Nghệ thuật AI Generative',
    tech_item3_desc:        'AI tạo ra tranh Thiền họa độc đáo cho riêng bạn, dựa trên dữ liệu hành trình công án.',

    /* KOAN QUEST steps */
    koan_section_label: 'KOAN QUEST — Hành trình 4 bước khám phá công án',
    koan_step1_title:   'Di chuyển đến địa điểm',
    koan_step1_desc:    'Di chuyển đến thánh địa Yên Tử hoặc đối tác',
    koan_step2_title:   'Đối diện công án',
    koan_step2_desc:    'AR Trigger — công án xuất hiện trong thực tế',
    koan_step3_title:   'Suy ngẫm & Nhiệm vụ',
    koan_step3_desc:    'Meditation — thực hiện nhiệm vụ thiền định',
    koan_step4_title:   'Nhận phần thưởng',
    koan_step4_desc:    'Unlock Reward — tranh Thiền AI & đặc quyền',
    koan_more_link:     'Khám phá thêm về KOAN QUEST →',

    /* Retreat package features */
    retreat_pkg_label:    'Sản phẩm gói trải nghiệm',
    retreat_camp_f1:      'Chỗ ở cắm trại thiên nhiên',
    retreat_camp_f2:      'Chương trình thiền cơ bản',
    retreat_camp_f3:      'Bao gồm bữa sáng thuần chay',
    retreat_camp_f4:      'Hướng dẫn trekking Yên Tử',
    retreat_village_f1:   'Lưu trú phòng làng',
    retreat_village_f2:   'Hướng dẫn thiền chuyên nghiệp',
    retreat_village_f3:   'Bao gồm 2 bữa thuần chay',
    retreat_village_f4:   'Bao gồm tour cáp treo',
    retreat_village_f5:   'Thăm Chùa Trúc Lâm',
    retreat_vip_f1:       'Phòng riêng cao cấp',
    retreat_vip_f2:       'Thiền sư 1:1',
    retreat_vip_f3:       'Tour độc quyền M Gallery',
    retreat_vip_f4:       'Bao gồm ăn uống thuần chay toàn bộ',
    retreat_vip_f5:       'Trải nghiệm KOAN QUEST',
    retreat_all_link:     'Xem tất cả sản phẩm →',
    retreat_long_label:   'Retreat sống một tháng',
    retreat_long_desc:    'Trải nghiệm thế giới Thiền sâu sắc hơn qua lưu trú dài hạn. Chương trình tùy chỉnh và ưu đãi đặc biệt.',
    retreat_long_cta:     'Đăng ký tư vấn →',

    /* Product cards */
    product_1n2d:       'Yên Tử 1 đêm 2 ngày',
    product_1n2d_sub:   'Gói retreat · Liên hệ đặt chỗ →',
    product_halong:     'Vịnh Hạ Long & Yên Tử 1 đêm 2 ngày',
    product_halong_sub: 'Retreat + Du lịch · Liên hệ đặt chỗ →',
    product_4n5d:       'Hành hương 4 đêm 5 ngày',
    product_4n5d_sub:   'Gói phục hồi · Liên hệ đặt chỗ →',
    product_6n7d:       'Sống ở chùa 6 đêm 7 ngày',
    product_6n7d_sub:   'Tu tập chuyên sâu · Liên hệ đặt chỗ →',

    /* Sky Café & Bar */
    sky_desc:         'Trải nghiệm Zen Night tốt nhất vùng núi phía Bắc Việt Nam',
    sky_day_desc:     'Thiền định trong sương mù · Trà Thiền · Hòa mình vào thiên nhiên',
    sky_night_desc:   'Laser · EDM · ZenSpark Highball',
    sky_zen_title:    'Quán cà phê thiền ban ngày',
    sky_zen_desc:     'Thiền định trên núi Yên Tử, trà hữu cơ, trekking rừng núi',
    sky_rave_title:   'Lễ hội EDM đêm',
    sky_rave_desc:    'Forest · Fire · Fog · Frequency — DJ Forest Shaman',
    sky_camp_title:   '20 điểm cắm trại',
    sky_camp_desc:    'Lửa trại dưới sao, thiền rừng lúc 06:00 sáng',
    sky_t14:          'Check-in · Quán Thiền',
    sky_t18:          'Ngắm hoàng hôn · Trà Thiền',
    sky_t20:          'Laser · EDM · Highball',
    sky_t23:          'Nhìn lửa · Cắm trại',
    sky_t06:          'Thiền rừng lúc bình minh',
    sky_camp_site:    'Khu cắm trại trước chùa Yên Tử',
    sky_camp_sub:     '20 điểm · Lửa trại dưới sao',
    sky_cta:          'Đặt chỗ Sky Café & Bar →',
    sky_note:         'YÊN TỬ FOREST EDM FESTIVAL · Trong vườn quốc gia Yên Tử',

    /* Map extras */
    map_sub:              'Làng Yên Tử',
    map_services_desc:    'Thánh địa Phật giáo · Cáp treo + Buffet chay + Săn kho báu + Lưu trú + Gói hữu cơ',
    map_merchants_link:   'Xem đối tác →',

    /* Services extras */
    svc_all_link:     'Xem tất cả dịch vụ →',
    svc_visit_link:   'Truy cập →',

    /* Footer extras */
    footer_brand_desc: 'Không gian kết hợp nghệ thuật, trải nghiệm và thương mại dựa trên tinh thần Thiền (禪).',
  },
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
    notices_label:  '이벤트',
    notices_title:  '정회원 혜택',
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
    svc_mall:        'Zen MemberShip Mall',
    svc_mall_desc:   '회원 전용 패쇄몰',
    svc_voucher:     'Zen Voucher',
    svc_voucher_desc:'특별한 체험을 선물로 드려보세요.',
    svc_hotel:       'Zen Spark Hotel',
    svc_hotel_desc:  '자연 속 고요한 숙박 체험을 즐기세요.',
    svc_taxi:           'Yen Tu Taxi',
    svc_taxi_desc:      '옌뚜 셔틀 버기 예약 서비스입니다.',
    svc_treasure:       '보물찾기',
    svc_treasure_desc:  '옌뚜 지역 가맹점 지도에서 보물을 찾아보세요.',
    svc_academy:     '명상 지도자 아카데미',
    svc_academy_desc:'6단계 자격 과정으로 선 명상 전문 지도자를 양성합니다.',
    svc_koan:        'KOAN QUEST',
    svc_koan_desc:   '옌뚜 가맹점을 탐험하는 게이미피케이션 선 체험.',
    svc_ai_art:      'AI ZEN ART',
    svc_ai_art_desc: 'AI로 만나는 선 철학 기반 디지털 아트 창작 체험.',
    svc_festival:    'Yen Tu Zen Festival',
    svc_festival_desc:'"Awaken Together" — 연간 선 명상·문화 축제.',
    svc_coming_soon: '준비 중',
    svc_inquiry:     '문의하기',
    svc_visit:       '바로가기 →',

    /* About - 4 Pillars */
    about_pillar1:      '리트릿 체험',
    about_pillar1_desc: '1박2일~한달살기, 선 명상·요가·채식 프로그램',
    about_pillar2:      '옌뚜 빌리지',
    about_pillar2_desc: '죽림선사원·M갤러리·케이블카·가맹점 생태계',
    about_pillar3:      '명상 아카데미',
    about_pillar3_desc: '6단계 자격 과정, AI 선 아트, KOAN QUEST',
    about_pillar4:      '젠 페스티벌',
    about_pillar4_desc: '"Awaken Together" 연간 이벤트·커뮤니티 확장',

    /* Retreat Packages */
    retreat_label:       '리트릿 패키지',
    retreat_title:       '나에게 맞는 선 체험',
    retreat_desc:        '1박2일 기본 패키지부터 한달살기까지, 깊은 명상과 자연 속 회복을 경험하세요.',
    retreat_tier1:       '캠핑형',
    retreat_tier1_sub:   '1박2일 기준',
    retreat_tier2:       '빌리지형',
    retreat_tier2_sub:   '1박2일 기준',
    retreat_tier3:       '프리미엄 / VIP',
    retreat_tier3_sub:   '1박2일 기준',
    retreat_cta:         '예약 문의',
    retreat_popular:     '인기',

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

    /* About intro */
    about_intro_p1:   'Zen Spark Gallery는 리트릿 체험·빌리지 생태계·명상 아카데미·젠 페스티벌을 하나의 플라이휠로 연결하는, 베트남 선불교 성지 Yen Tu에 위치한 플랫폼입니다.',
    about_intro_p2:   '디지털 기술이 선(禪)의 지혜를 만나는 곳 — 가장 현대적인 깨달음의 여정을 경험하세요.',

    /* Heritage × Technology */
    heritage_title:        '과거의 유산 × 미래의 기술',
    heritage_desc:         '800년 선불교 성지와 최첨단 기술이 결합되어 전례 없는 깨달음의 여정을 열어갑니다.',
    heritage_past_label:   '과거의 장엄한 유산',
    heritage_future_label: '미래의 몰입형 기술',
    heritage_item1_title:  '13세기 죽림사원',
    heritage_item1_desc:   '트란 냔 통 황제가 죽림선 불교를 창시한 곳. 800년의 침묵이 깃든 성지.',
    heritage_item2_title:  '청정한 대나무 숲',
    heritage_item2_desc:   'Yen Tu 정상으로 이어지는 천년의 숲 길. 바람이 속삭이는 공안의 소리만 들려옵니다.',
    heritage_item3_title:  '해발 1,068m의 성지',
    heritage_item3_desc:   '안개 낀 산정의 신비로운 분위기. 매년 수십만 명의 순례자들이 찾는 곳.',
    tech_item1_title:      '3D 프로젝션 매핑 & 공간 음향',
    tech_item1_desc:       '사찰 벽면에 펼쳐지는 선화(禪畵) 미디어아트와 몰입형 입체 음향의 결합.',
    tech_item2_title:      '위치 기반 AR 게이미피케이션',
    tech_item2_desc:       'AR 트리거로 공안이 현실에 등장하고, 명상 미션을 완수하면 리워드가 열립니다.',
    tech_item3_title:      'AI 생성 예술',
    tech_item3_desc:       'AI가 나만의 공안 여정 데이터를 기반으로 유일한 선화를 창작해 드립니다.',

    /* KOAN QUEST steps */
    koan_section_label: 'KOAN QUEST — 4단계 공안 탐험 여정',
    koan_step1_title:   '장소로 이동',
    koan_step1_desc:    'Yen Tu 성지 또는 가맹점으로 이동',
    koan_step2_title:   '공안 대면',
    koan_step2_desc:    'AR 트리거 — 공안이 현실에 등장',
    koan_step3_title:   '성찰 & 미션',
    koan_step3_desc:    'Meditation — 명상 미션 수행',
    koan_step4_title:   '리워드 수령',
    koan_step4_desc:    'Unlock Reward — AI 선화 & 특권',
    koan_more_link:     'KOAN QUEST 자세히 알아보기 →',

    /* Retreat package features */
    retreat_pkg_label:  '체험 패키지 상품',
    retreat_camp_f1:    '자연 캠핑 숙소',
    retreat_camp_f2:    '기초 명상 프로그램',
    retreat_camp_f3:    '채식 조식 포함',
    retreat_camp_f4:    'Yen Tu 트레킹 안내',
    retreat_village_f1: '빌리지 룸 숙박',
    retreat_village_f2: '전문 명상 지도',
    retreat_village_f3: '채식 2식 포함',
    retreat_village_f4: '케이블카 투어 포함',
    retreat_village_f5: '죽림선원 방문',
    retreat_vip_f1:     '프리미엄 독립 객실',
    retreat_vip_f2:     '1:1 명상 지도사',
    retreat_vip_f3:     '독점 M 갤러리 투어',
    retreat_vip_f4:     '전 식사 채식 포함',
    retreat_vip_f5:     'KOAN QUEST 체험',
    retreat_all_link:   '전체 상품 보기 →',
    retreat_long_label: '한달살기 리트릿',
    retreat_long_desc:  '장기 체류로 더 깊은 선(禪)의 세계를 경험해 보세요. 맞춤 프로그램과 특별 혜택을 제공합니다.',
    retreat_long_cta:   '상담 신청 →',

    /* Product cards */
    product_1n2d:       'Yen Tu 1박2일',
    product_1n2d_sub:   '리트릿 패키지 · 예약 문의 →',
    product_halong:     '하롱베이 & Yen Tu 1박2일',
    product_halong_sub: '리트릿 + 관광 · 예약 문의 →',
    product_4n5d:       '순례 4박5일',
    product_4n5d_sub:   '회복 패키지 · 예약 문의 →',
    product_6n7d:       '사찰 한 달 살기 6박7일',
    product_6n7d_sub:   '집중 수행 · 예약 문의 →',

    /* Sky Café & Bar */
    sky_desc:      '베트남 북부 최고의 Zen Night 체험',
    sky_day_desc:  '안개 속 명상 · 선차(禪茶) · 자연과의 합일',
    sky_night_desc:'Laser · EDM · ZenSpark Highball',
    sky_zen_title: '낮의 선 카페',
    sky_zen_desc:  'Yen Tu 산 위의 명상, 유기농 차, 숲속 트레킹',
    sky_rave_title:'밤의 EDM 페스티벌',
    sky_rave_desc: 'Forest · Fire · Fog · Frequency — DJ Forest Shaman',
    sky_camp_title:'캠핑 사이트 20곳',
    sky_camp_desc: '별빛 아래 모닥불, 새벽 06:00 숲속 명상',
    sky_t14:       '체크인 · 선 카페',
    sky_t18:       '일몰 감상 · 선차',
    sky_t20:       'Laser · EDM · Highball',
    sky_t23:       '불멍 · 캠핑',
    sky_t06:       '새벽 숲속 명상',
    sky_camp_site: 'Yen Tu 사찰 앞 캠핑 사이트',
    sky_camp_sub:  '20곳 · 별빛 아래 모닥불',
    sky_cta:       'Sky Café & Bar 예약하기 →',
    sky_note:      'YEN TU FOREST EDM FESTIVAL · Yen Tu 국립공원 내',

    /* Map extras */
    map_sub:            'Yen Tu 빌리지',
    map_services_desc:  '선불교 성지 · 케이블카 + 채식 뷔페 + 보물찾기 + 숙박 + 유기농 패키지',
    map_merchants_link: '가맹점 보기 →',

    /* Services extras */
    svc_all_link:   '전체 서비스 보기 →',
    svc_visit_link: '바로가기 →',

    /* Footer extras */
    footer_brand_desc: '선(禪)의 정신을 기반으로 예술, 체험, 커머스를 결합한 공간입니다.',
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
    notices_label:  'Events',
    notices_title:  'Member Benefits',
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
    svc_mall:        'Zen MemberShip Mall',
    svc_mall_desc:   'Members-only closed mall.',
    svc_voucher:     'Zen Voucher',
    svc_voucher_desc:'Give the gift of a mindful experience.',
    svc_hotel:       'Zen Spark Hotel',
    svc_hotel_desc:  'Enjoy a peaceful stay immersed in nature.',
    svc_taxi:           'Yen Tu Taxi',
    svc_taxi_desc:      'Book a buggy shuttle to Yen Tu.',
    svc_treasure:       'Treasure Hunt',
    svc_treasure_desc:  'Find hidden treasures on the Yen Tu merchant map.',
    svc_academy:     'Meditation Leader Academy',
    svc_academy_desc:'A 6-level certification program to train professional Zen meditation instructors.',
    svc_koan:        'KOAN QUEST',
    svc_koan_desc:   'A gamified Zen experience exploring Yen Tu merchant partners.',
    svc_ai_art:      'AI ZEN ART',
    svc_ai_art_desc: 'Create digital art inspired by Zen philosophy using AI.',
    svc_festival:    'Yen Tu Zen Festival',
    svc_festival_desc:'"Awaken Together" — annual Zen meditation & culture festival.',
    svc_coming_soon: 'Coming Soon',
    svc_inquiry:     'Enquire',
    svc_visit:       'Visit →',

    /* About - 4 Pillars */
    about_pillar1:      'Retreat Experience',
    about_pillar1_desc: '1-night to month-long stays: Zen meditation, yoga & plant-based dining',
    about_pillar2:      'Yen Tu Village',
    about_pillar2_desc: 'Truc Lam Temple · M Gallery · Cable Car · Partner ecosystem',
    about_pillar3:      'Meditation Academy',
    about_pillar3_desc: '6-level certification, AI Zen Art, KOAN QUEST gamification',
    about_pillar4:      'Zen Festival',
    about_pillar4_desc: '"Awaken Together" — annual events & community expansion',

    /* Retreat Packages */
    retreat_label:       'Retreat Packages',
    retreat_title:       'Find Your Zen Experience',
    retreat_desc:        'From a one-night introduction to a month-long immersion — reconnect with stillness at Yen Tu.',
    retreat_tier1:       'Camping',
    retreat_tier1_sub:   'Per 1 night / 2 days',
    retreat_tier2:       'Village Stay',
    retreat_tier2_sub:   'Per 1 night / 2 days',
    retreat_tier3:       'Premium / VIP',
    retreat_tier3_sub:   'Per 1 night / 2 days',
    retreat_cta:         'Enquire Now',
    retreat_popular:     'Popular',

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

    /* About intro */
    about_intro_p1:   'Zen Spark Gallery connects retreat experiences · village ecosystem · meditation academy · Zen festival into a single flywheel at Yen Tu, Vietnam\'s sacred Buddhist site.',
    about_intro_p2:   'Where digital technology meets Zen wisdom — offering the most modern journey of awakening.',

    /* Heritage × Technology */
    heritage_title:        'Past Heritage × Future Technology',
    heritage_desc:         '800 years of sacred Buddhist heritage combined with cutting-edge technology, opening an unprecedented journey of awakening.',
    heritage_past_label:   'The magnificent heritage of the past',
    heritage_future_label: 'The immersive technology of the future',
    heritage_item1_title:  '13th Century Truc Lam Temple',
    heritage_item1_desc:   'Where Emperor Tran Nhan Tong founded Truc Lam Zen Buddhism. An 800-year-old sanctuary of silence.',
    heritage_item2_title:  'Serene Bamboo Forests',
    heritage_item2_desc:   'A thousand-year forest path leading to the summit of Yen Tu. Only the wind whispers the koan.',
    heritage_item3_title:  'Sacred Site at 1,068m Elevation',
    heritage_item3_desc:   'The mystical atmosphere of the misty mountaintop. Where hundreds of thousands of pilgrims gather each year.',
    tech_item1_title:      '3D Projection Mapping & Spatial Audio',
    tech_item1_desc:       'Zen painting media art on temple walls, combined with immersive spatial audio.',
    tech_item2_title:      'Location-Based AR Gamification',
    tech_item2_desc:       'Koans appear as AR triggers in reality; complete meditation missions to unlock rewards.',
    tech_item3_title:      'AI Generative Art',
    tech_item3_desc:       'AI creates a unique Zen painting just for you, based on your koan journey data.',

    /* KOAN QUEST steps */
    koan_section_label: 'KOAN QUEST — 4-Step Koan Discovery Journey',
    koan_step1_title:   'Travel to the Site',
    koan_step1_desc:    'Travel to Yen Tu sacred site or a partner merchant',
    koan_step2_title:   'Face the Koan',
    koan_step2_desc:    'AR Trigger — the koan appears in reality',
    koan_step3_title:   'Reflect & Complete Mission',
    koan_step3_desc:    'Meditation — complete your meditation mission',
    koan_step4_title:   'Receive Your Reward',
    koan_step4_desc:    'Unlock Reward — AI Zen painting & privileges',
    koan_more_link:     'Explore KOAN QUEST →',

    /* Retreat package features */
    retreat_pkg_label:  'Experience Package Products',
    retreat_camp_f1:    'Nature camping accommodation',
    retreat_camp_f2:    'Basic meditation program',
    retreat_camp_f3:    'Plant-based breakfast included',
    retreat_camp_f4:    'Yen Tu trekking guide',
    retreat_village_f1: 'Village room accommodation',
    retreat_village_f2: 'Professional meditation guidance',
    retreat_village_f3: '2 plant-based meals included',
    retreat_village_f4: 'Cable car tour included',
    retreat_village_f5: 'Truc Lam Temple visit',
    retreat_vip_f1:     'Premium private room',
    retreat_vip_f2:     '1:1 personal meditation master',
    retreat_vip_f3:     'Exclusive M Gallery tour',
    retreat_vip_f4:     'All plant-based meals included',
    retreat_vip_f5:     'KOAN QUEST experience',
    retreat_all_link:   'View all products →',
    retreat_long_label: 'Monthly Stay Retreat',
    retreat_long_desc:  'Experience a deeper world of Zen through long-term stays. Personalized programs and special benefits.',
    retreat_long_cta:   'Apply for consultation →',

    /* Product cards */
    product_1n2d:       'Yen Tu 1 Night 2 Days',
    product_1n2d_sub:   'Retreat package · Enquire →',
    product_halong:     'Ha Long Bay & Yen Tu 1 Night 2 Days',
    product_halong_sub: 'Retreat + Tourism · Enquire →',
    product_4n5d:       '4 Night 5 Days Pilgrimage',
    product_4n5d_sub:   'Recovery package · Enquire →',
    product_6n7d:       'Temple Life 6 Nights 7 Days',
    product_6n7d_sub:   'Intensive practice · Enquire →',

    /* Sky Café & Bar */
    sky_desc:      'The best Zen Night experience in Northern Vietnam',
    sky_day_desc:  'Meditation in the mist · Zen Tea · One with nature',
    sky_night_desc:'Laser · EDM · ZenSpark Highball',
    sky_zen_title: 'Daytime Zen Café',
    sky_zen_desc:  'Meditation on Yen Tu Mountain, organic tea, forest trekking',
    sky_rave_title:'Night EDM Festival',
    sky_rave_desc: 'Forest · Fire · Fog · Frequency — DJ Forest Shaman',
    sky_camp_title:'20 Camping Sites',
    sky_camp_desc: 'Campfire under the stars, forest meditation at 06:00 AM',
    sky_t14:       'Check-in · Zen Café',
    sky_t18:       'Sunset · Zen Tea',
    sky_t20:       'Laser · EDM · Highball',
    sky_t23:       'Fire gazing · Camping',
    sky_t06:       'Dawn forest meditation',
    sky_camp_site: 'Yen Tu Temple Camping Site',
    sky_camp_sub:  '20 sites · Campfire under the stars',
    sky_cta:       'Book Sky Café & Bar →',
    sky_note:      'YEN TU FOREST EDM FESTIVAL · Inside Yen Tu National Park',

    /* Map extras */
    map_sub:            'Yen Tu Village',
    map_services_desc:  'Sacred Buddhist site · Cable car + Vegan buffet + Treasure hunt + Accommodation + Organic packages',
    map_merchants_link: 'View merchants →',

    /* Services extras */
    svc_all_link:   'View all services →',
    svc_visit_link: 'Visit →',

    /* Footer extras */
    footer_brand_desc: 'A space combining art, experience, and commerce based on the spirit of Zen (禪).',
  }
};

const Language = (() => {
  let current = localStorage.getItem('zsg_lang') || 'vi';

  function get(key) {
    return (TRANSLATIONS[current] && TRANSLATIONS[current][key])
      || (TRANSLATIONS['vi'] && TRANSLATIONS['vi'][key])
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
