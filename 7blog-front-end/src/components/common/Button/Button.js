import React from 'react';
import styles from './Button.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default',
}) => {
    //to 값이 존재하면 Link를 사용하고, 그렇지 앟ㄴ으면 div를 사용합니다
    //비활성화 되어있는 버튼일때도 div를 사용합니다.
    const Element = (to && !disabled) ? Link : Div;

    return (
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick = {disabled? () => null : onClick}>
            {children}
            </Element>
    )
};

export default Button;