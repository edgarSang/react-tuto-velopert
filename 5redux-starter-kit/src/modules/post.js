import { handleActions, createAction } from 'redux-actions';

import axios from 'axios'

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILUER = 'GET_POST_FAILUER';

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILUER);

export const getPost = (postId) => dispatch => {
    //요청이 먼저 시작했다는걸 알린다.
    dispatch(getPostPending);

    // 요청을 시작, 여기서 만든 promise를 리턴해여 나중에 컴포넌트에서
    // 호출할때 getPost().then(...) 을 할수있다.
    return getPostAPI(postId).then((response) => {
        // 요청이 성공했다면 서버 응답을 payload를 설정하여
        // dispatch 하도록하자.
        dispatch(getPostSuccess(response));
        return response;
    }).catch( error => {
        //오류가 발생하면 오류 내용을 payload로 설정하여
        //Get POST FAILURE 액션을 디스패치합니다.
        dispatch(getPostFailure(error));
        throw(error);
    })
}

const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        }
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const { title, body } = action.payload.data; 
        
        return {
            ...state,
            pending:false,
            data: {
                title,
                body
            }
        }
    },
    [GET_POST_FAILUER]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);