import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux'
import appReducers from './reducer/index'
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// 1. index of app { create store => import appReducer => import Provider => Wrapper Provider(stort) APP =>  }
// 2. appReducer { combindReducer } (import al reducer then combind them)
// 3. reducer { create State } => create reducer { switch case }
// 4. action
// 5. actionTypes

const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk)),
    
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);

