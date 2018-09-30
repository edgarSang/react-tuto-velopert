import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//액션 생성 함수들을 한껍너에 불러옵니다.
import * as inputActions from '../modules/input';
import * as todosACtions from '../modules/todos';

class TodoInputContainer extends Component {
    id = 1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { InputActions } = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value} = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false,
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }

    render() {
        const { value } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <TodoInput
                onChange = {handleChange}
                onInsert = {handleInsert}
                value = {value}
            />
        );
    }
}

export default connect (
    (state) => ({
        value: state.input.get('value')
    }), (dispatch) => ({
        /* bindActionCreators 를 쓰면 자동으로 다음작업들을 합니다.
        {
            actionCreator: (...params) => dispatch(actionCreator(...params))
        }
        그래서 이전에 우리가 했던것처럼 일일히 dispatch를 할 필요가 없습니다.
        예를들어 InputActions 에는 다음과 같은 작업이 되어 있는거죠
        InputActions: {
            setInput: (value) => dispatch(inputActions.setInput(value))
        }
        나중에 이를 호출할떄는 this.props.InputActions.setInput 을 호출하면됩니다.
        */
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosACtions, dispatch)
    })
)(TodoInputContainer);

