import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({id:index, text: `일정 ${index}`, done: false})
);

class App extends Component {
    state = {
        input: '',
        todos: initialTodos,
    }

    id = 1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value,
        });
    }

    handleInsert = () => {
        const { todos, input } = this.state;

        //새 데이터 객체 만들기.
        const newTodo = {
            text: input,
            done: false,
            id: this.getId(),
        }

        this.setState({
            todos:[...todos, newTodo],
            input: ''
        });
    }

    // 수정하기
    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        // 찾은 데이터의 done 값을 반전시킵니다.
        const toggled = {
            ...todos[index],
            done: !todos[index].done,
        };

        // slicde를 사용하여 우기라 찾은 데이터의 index 전 후 데이터를 복사
        // 그대로 변경된 todo 객체를 넣어줌

        this.setState({
            todos:[
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }

    handleRemove = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        //slice 인덱스 전후는 추가하고 인덱스는 제외시킨다.
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length),
            ]
        })
    }

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove,
        } = this;

        return (
            <div>
                <PageTemplate>
                    <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                    <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
                </PageTemplate>
            </div>
        )
    }
}

export default App;