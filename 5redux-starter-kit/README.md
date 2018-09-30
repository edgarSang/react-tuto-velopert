# redux-starter-kit

리덕스 스타터킷으로 사용되는 프로젝트입니다.
[Ducks 구조](https://velopert.com/3358) 가 적용된 카운터 코드가 안에 들어있습니다.

# redux logger
---------------
yarn add redux-logger 
적용 방법은 sotre.js 확인, 원리는 loggerMiddleware.js 파일 확인할것

# redux-thunk
thunk란 특정 작업을 미루려고 함수형태로 감싼것을 의미한다
ex) const x = 1+2 는 바로실행되지만
context x = () => 1+2; 는 x를 호출해야 실행된다.
redux에서 action을 dispatch 할때 함수형태로 dispatch 할수있게 해준다.
이는 특정 action 을 시간차 또는 if문 분기를 태워 실행시킬수 있음을의미한다. middle ware는 action을 reducer로 보낼떄 중간에 후킹해서 추가작업을 해주는것이다.

# redux-promise-middleware
Promise 기반의 비동기 작업을 좀더 편하게 해주는 미들웨어입니다.

Promise 객체를 payload로 전달하면서 시작, 성공, 실패할때 액션뒷부분에 _PENDING, _FULFILLED< _REJECTED를 붙여서 반환합니다.
각 그렇게된다면 액션타입을 굳이 3종류로 나눠서 설정할필요가없죠.,
대신 우리는 기존코드에서 SUCCESS FAILUER를 사용하니 이를 임의값으로 설정하겠습니다.