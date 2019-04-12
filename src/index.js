import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import rootReducer from './redux/reducers/rootReducer';
import { createStore, applyMiddleware, compose  } from 'redux';
import logger from 'redux-logger'
// const store = createStore(rootReducer, applyMiddleware(logger));

// enable dev tools ectention
const store = createStore(
    rootReducer,
    compose( applyMiddleware(logger), window.devToolsExtension ? window.devToolsExtension() : f => f )
);


ReactDOM.render(
<Provider store={store}><App/></Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
