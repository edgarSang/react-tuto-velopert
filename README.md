## 이것은 벨로퍼트님의 리액트 책을 보면서 정리한 내용입니다

기본
----------
src에 App.css, App.test.js, logo.svg 삭제

리덕스란
-----
!todo:정리

리덕스 용어개념 정리
------
!todo정리

리덕스를 적용시킬땐 다음과 같은순서로 하세요
------
액션 타입 정의하기 -> 액션 생성 함수 만들기 -> 초기상태 정의하기 -> 리듀서 정의하기.


필수 addin vscode 및 단축키 정리
------
todo

필수 서드파티 redux & react
------
todo


마지막 대망의  blog front end project 순서
----------------------------
1. 불필요한 파일 제거 및 Sass 및 css 모듈 적용
 - 폴더 6개 생성 styles, components, containers, lib, pages, store
 - src내 App.css, App.js, App.test.js, index.css, logo.svg
 - yarn eject
 - yarn add node-sass sass-loader classnames
    - webpack에 sass loader을 위해 webpack.config.dev.js수정 및 config/path.js에 globalStyles 등록
    - webpack.config.prod.js 도 수정

2. 라우터와 리덕스 적용
 - yarn add react-router-dom redux redux-actions react-redux redux-pender immutable
 
3. 리덕스를 적용하기 위해선 프로젝트에 필요한 모듈들 먼저 만들어야합니다. 리덕스 모듈은 네종류입니다.
 - base, editor, list, post
 - 그다음으로 configure 파일을 만들고, Root 컴포넌트에서 configure 파일을 호추를 하여 스토어를 생성하여 Provider로 store를 전달합니다.

 4. 라우트지정
  - 프로젝트에서 필요한 라우트에서 사용할 페이지 컴포넌트를 미리 만들어보겠습니다.
  - 홈, 포스트목록, 포스트목록(태그설정), 포스트 읽기, 에디터, 404 페이지의 종류가 이 플젝에서 존재합니다.

5. Scss 파일 page template 파일 만들기
 - 만들때는 generate-react-component 라는 vscode addin을 다운받고 재시작하세여.
 - 만들때 오른쪽 뉴 선택했을때 자동으로 원하는 설정을 만들어줍니다.
 - 벨로퍼트님께서 사스 컴포넌트 템플릿을 만들어놧으니 vscode를 열고 git에서 클론을 받아서 그걸 지정해주세여
 - 그럼 그런식으로 템플릿을 생성해줍니다.
 - 반응형 디자인을 쉽게 include-media AND 그림자를 간편하게 설정하는 metarial-shadow 믹스인입니다.
 - yarn add opencolor include-media

6. 나머지 컴포넌트들 생성.
 - Header, PageTemplate, ListPage, PageNation 등등..