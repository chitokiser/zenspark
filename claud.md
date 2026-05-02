# Claude 개발 규칙

## 0. 웹앱 아키텍처
✔️ 정의
본 프로젝트는 단순 웹사이트가 아닌 Web App (웹앱) 기준으로 개발
✔️ 구조 원칙
Frontend / Backend 분리 구조
API 기반 통신 (REST or GraphQL)
상태관리(State Management) 필수

## 1. 코드 스타일

* HTML / CSS / JS 분리
* 컴포넌트화
* 재사용 가능한 구조

---

## 2. 보안

* API 키는 노출 최소화
* 환경 변수 사용 권장

---

## 3. 로그인

* Google OAuth 우선
* Jump ID API 연결 구조 설계

---

## 4. 데이터 처리

* 게시판: CRUD 가능 구조
* 좋아요 / 댓글 기능 포함

---

## 5. 다국어 처리

* i18n 구조 사용
* JSON 기반 번역 파일

---

## 6. 성능

* 이미지 최적화
* Lazy Loading 적용

---

## 7. UX 원칙

* 모바일 우선
* 직관적 UI
* 최소 클릭

---

## 8. 유지보수

* 주석 필수
* 함수 단위 분리

---

## 9. 배포

* Netlify 또는 Vercel 호환

---

## 10. 금지 사항

* 하드코딩 남발 금지
* API 키 직접 노출 금지
 *  storage.rules 또는 firestore.rules 수정시 이 파일은 jump와 공유하기 때문에 여기서 수정시에는 충돌이나 누락없이 해야 한다.