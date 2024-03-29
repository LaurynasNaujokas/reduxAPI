import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

console.log(store.getState());

ReactDOM.render(<App/>,document.getElementById('root'));

