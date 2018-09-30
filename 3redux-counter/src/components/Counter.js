import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={ () => onIncrement(index)}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement(index);
            }}
            onDoubleClick={() => onSetColor(index)}
            style={{
                backgroundColor: color
            }}>
            {number}
        </div>
    );
};

Counter.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
}

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn("not found Incremnet func"),
    onDecrement: () => console.warn("not found onDecrement func"),
    onSetColor:() => console.warn("not found SetColor func"),
}

export default Counter;