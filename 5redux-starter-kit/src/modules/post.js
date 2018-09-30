import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios'

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    ...pender({
        type: GET_POST, //type이 주어지면 이 Type에 접미사를 붙인
                        //액션 핸들러들이 담긴 객체들을 만듭니다.
        /* 요청 중일 때와 실패했을때 추가로 해야 할 작업이 있따면,
            아래와 같은 함수를 추가하면 됩니다.
            onPending: (state, action) => state
            onFailure: (state, action) => state
        */
        onSuccess: (state, action) => {
            //성공했을때 따로 작업이 따로없으면 이함수또한 생략해도됩니다.
            const { title, body } = action.payload.data;
            return {
                data: {
                    title,
                    body
                }
            }
        },
        onCancel: (state,action) => {
            return {
                data: {
                    title: '취소됨',
                    body: '취소됨'
                }
            }
        }
        //함수를 생략한다면 기본적으로 (state, action) => state를 설정합니다.
        //state를 그대로 반환한다는것이죠,
    })
}, initialState);


/** redux-promise-middelware 썻을때 **/
// export const getPost = (postId) => ({
//     type: GET_POST,
//     payload: getPostAPI(postId)
// });

/** REDUX THUNK 썻을때 **/
// const GET_POST_PENDING = 'GET_POST_PENDING';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_FAILUER = 'GET_POST_FAILUER';

// const getPostPending = createAction(GET_POST_PENDING);
// const getPostSuccess = createAction(GET_POST_SUCCESS);
// const getPostFailure = createAction(GET_POST_FAILUER);

// export const getPost = (postId) => dispatch => {
//     //요청이 먼저 시작했다는걸 알린다.
//     dispatch(getPostPending);

//     // 요청을 시작, 여기서 만든 promise를 리턴해여 나중에 컴포넌트에서
//     // 호출할때 getPost().then(...) 을 할수있다.
//     return getPostAPI(postId).then((response) => {
//         // 요청이 성공했다면 서버 응답을 payload를 설정하여
//         // dispatch 하도록하자.
//         dispatch(getPostSuccess(response));
//         return response;
//     }).catch( error => {
//         //오류가 발생하면 오류 내용을 payload로 설정하여
//         //Get POST FAILURE 액션을 디스패치합니다.
//         dispatch(getPostFailure(error));
//         throw(error);
//     })
// }

// export default handleActions({
//     [GET_POST_PENDING]: (state, action) => {
//         return {
//             ...state,
//             pending: true,
//             error: false
//         }
//     },
//     [GET_POST_SUCCESS]: (state, action) => {
//         const { title, body } = action.payload.data; 
        
//         return {
//             ...state,
//             pending:false,
//             data: {
//                 title,
//                 body
//             }
//         }
//     },
//     [GET_POST_FAILUER]: (state, action) => {
//         return {
//             ...state,
//             pending: false,
//             error: true
//         }
//     }
// }, initialState);