import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { todoReducer } from './store/reducers';

import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

const store = createStore(
    combineReducers({
        todo: todoReducer,
    }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

