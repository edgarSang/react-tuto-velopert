import React from 'react';
import styles from './PostBody.scss';
import ClassNames from 'classnames/bind';

const cx = ClassNames.bind(styles);

const PostBody = () => (
    <div className={cx('post-body')}>
        <div className={cx('paper')}>
            내용
        </div>
    </div>

)

export default PostBody;