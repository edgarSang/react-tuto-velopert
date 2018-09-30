import React from 'react';
import stlyes from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(stlyes);

const TodoInput = ({value, onChange, onInsert}) => {

    //Enter 가 눌리면 onInsert를 실행합니다.
    const handleKeyPress = (e) => {
        if(e.key == 'Enter') {
            onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;