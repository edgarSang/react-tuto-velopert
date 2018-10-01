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
 - yarn eject
 - yarn add node-sass sass-loader classnames
    - webpack에 sass loader을 위해 webpack.config.dev.js수정 및 config/path.js에 globalStyles 등록
    - webpack.config.prod.js 도 수정

2. 라우터와 리덕스 적용

