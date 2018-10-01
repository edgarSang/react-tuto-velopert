import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  Posts
} from 'pages';
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      {/* Root 경로에는 무조건 Exact가 들어가야합니다. */}
      <Menu/>
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name?" component={About}/>
      <Route path="/posts" component={Posts}/>
    </div>
  );
};

export default App;
