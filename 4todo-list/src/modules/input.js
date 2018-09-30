import { Map } from 'immutable';
import { handleAction, createAction } from 'redux-actions';
import handleActions from 'redux-actions/lib/handleActions';

const SET_INPUT = 'input/SET_INPUT';
export const setInput = createAction(SET_INPUT);

const initialState = Map({
    value: '',
});

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload);
    }
})