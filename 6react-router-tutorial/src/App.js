import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About
} from 'pages';

const App = () => {
  return (
    <div>
      {/* Root 경로에는 무조건 Exact가 들어가야합니다. */}
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name?" component={About}/>
    </div>
  );
};

export default App;
