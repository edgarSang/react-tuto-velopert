import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

//액션 만들기
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//액션 생성자
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

//기본 스테이트
const initialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true,
    }),
    Map({
        id: 1,
        text: '컴포넌트 꾸미기',
        done: false,
    })
])

//리듀서 만들기
export default handleActions({
    [INSERT]: (state, action) =>{
        const {id, text, done} = action.paylaod;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE]: (state, action) => {
        const { payload: index } = action;
        // = const index = action.payload;
        /* 비구조화 할당으로 index 레퍼런스에 action.payload 값을 넣습니다.
             이작업은 필수는 아니지만 나중에 이 코드를 보았을때, payload가 어떤값을 의미하는지
             쉽게 알수있다
        */

        return state.updateIn([index, 'done'], done => !done);
        /* updateIN을 사용하지 않는다면 다음과 같이 작성가능하다.
            retunr state.setIn([index, 'done'], !state.getIn([0,Index]));
            편한걸 사용하도록 하자.
        */
    },
    [REMOVE]: (state, action) => {
        const { payload: index } = action;
        return state.delete(index);
    }
}, initialState)