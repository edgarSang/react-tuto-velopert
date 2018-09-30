import React, { Component } from 'react';
import styles from './App.scss';
import Button from './component/Button';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

console.log(styles);
class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div className={cx('box', {
        blue: isBlue
      })}>
        <Button>버튼</Button>
        <div className={cx('box-inside')}/>
      </div>
    );
  }
}

export default App;
