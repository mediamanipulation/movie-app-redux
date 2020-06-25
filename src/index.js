import React from 'react';
import ReactDOM from 'react-dom';
// redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App/App';
import reducers from './components/reducers'

import './index.css';

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);



ReactDOM.render(
<Provider store={storeWithMiddleware(reducers)}>
    <App />
</Provider>
, document.getElementById('root'))
;