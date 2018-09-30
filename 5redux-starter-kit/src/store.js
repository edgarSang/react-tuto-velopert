import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import { createLogger } from 'redux-logger';
//redux promise mdleware를 사용할것이므로 주석처리함
//import ReduxThunk from 'redux-thunk';

import promiseMiddleware from 'redux-promise-middleware';

const logger = createLogger();
const pm = promiseMiddleware({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
})

const store = createStore(modules, applyMiddleware(logger, pm))

export default store;