# nextjs rendering

nextjs(app router/page router)의 여러 렌더링 방식을 구현하고 특징을 비교하고자 합니다.
API의 경우 [mock api](https://mockapi.io/)를 활용하여 데이터를 가져옵니다

## 렌더링 방식

### 빌드결과

- App Router
  <img width="720" src="https://github.com/user-attachments/assets/def8d91b-50ec-4efd-aa3c-67802cdeb904" alt="App Router 빌드 결과">
- Page Router
  <img width="720" src="https://github.com/user-attachments/assets/1a89e023-1c78-4b14-bb93-64d48ff3b798" alt="Page Router 빌드 결과">

### CSR (Client-Side Rendering)

- 특징

  - 브라우저에서 JavaScript를 실행하여 콘텐츠를 렌더링
  - 초기 로딩 시 빈 HTML을 받고, JS로 동적으로 콘텐츠 생성
  - 사용자 상호작용이 많은 대시보드나 앱에 적합
  - TTI(Time to Interfactive)이 빠름, FCP 길어질 수 있음
  - 일반적으로 SEO 최적화 어려움

- 구현
  - [App Router](./app-router/src/app/CSR/page.tsx)
  - [Page Router](./page-router/src/pages/CSR.tsx)

### SSR (Server-Side Rendering)

- 특징

  - 서버에서 HTML을 생성하여 클라이언트에 전달
  - 매 요청마다 서버에서 렌더링 수행하므로 서버 비용 증가할 수 있음
  - 실시간 데이터가 필요한 페이지에 적합
  - 일반적으로 SEO 친화적
  - TTI(Time to Interfactive)이 느려질 수 있음, FCP 빠름

- 구현
  - [App Router](./app-router/src/app/SSR/page.tsx)
  - [Page Router](./page-router/src/pages/SSR.tsx)

### SSG

- 특징

  - 빌드 타임에 HTML을 미리 생성
  - 정적 파일로 제공되어 매우 빠른 로딩
  - CDN을 통한 전역 배포 가능
  - 빌드 시간 증가할 수 있음
  - 동적 데이터 처리 어려움(데이터 업데이트를 위해 재빌드)

- 구현
  - [App Router](./app-router/src/app/SSG/page.tsx)
  - [Page Router](./page-router/src/pages/SSG.tsx)

### ISR

- 특징

  - SSG의 데이터 업데이트 한계 극복(설정된 시간 간격으로 정적 페이지를 업데이트)
  - revalidate 시간 후 빌드 파일의 수정 시간이 변경됨

  <img width="720" src="https://github.com/user-attachments/assets/3d078bc0-7b45-4a9c-a267-77b3d862d635" alt="ISR 렌더링 결과">

- 구현
  - [App Router](./app-router/src/app/ISR/page.tsx)
  - [Page Router](./page-router/src/pages/ISR.tsx)
