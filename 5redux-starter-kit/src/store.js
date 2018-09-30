import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import { createLogger } from 'redux-logger';
//redux promise mdleware를 사용할것이므로 주석처리함
//import ReduxThunk from 'redux-thunk';
import penderMiddleWare from 'redux-pender';

const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, penderMiddleWare()))

export default store;