import React, { Component } from 'react';
import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
    state = {
        leftPercentage: 0.5
    }

    //세퍼레이터 클릭후 마우스를 움직일때
    handleMouseMove = (e) => {
        this.setState({
            leftPercentage: e.clientX / window.innerWidth
        });
    }

    handleMouseUp = (e) => {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    //seperator 클릭 했을때
    handleSeparatorMouseDown = (e) => {
        document.body.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        const { header, editor, preview } = this.props;
        const { leftPercentage } = this.state;
        const { handleSeparatorMouseDown } = this;

        //각 영역에 flex 값적용
        const leftStyle = {
            flex: leftPercentage,
        };
        const rightStyle = {
            flex: 1-leftPercentage,
        }

        // separator 위치설정
        const separatorStyle = {
            left: `${leftPercentage * 100}%`
        }
        return(
            <div className={cx('editor-template')}>
                {header}
                <div className={cx('panes')}>
                    <div className={cx('pane','editor')} style={leftStyle}>
                        {editor}
                    </div>
                    <div className={cx('pane', 'preview')} style={rightStyle}>
                        {preview}
                    </div>
                    <div
                        className={cx('separator')}
                        style={separatorStyle}
                        onMouseDown={handleSeparatorMouseDown}/>
                </div>
            </div>
        );
    }
}

export default EditorTemplate;