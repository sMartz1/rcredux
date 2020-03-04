import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MainApp from './components/MainApp';
import store from './redux/store';
//import store from './redux/store';
//import Results from './components/results';
//import Details from './components/details';

const Root = (
    <Provider store={store}>
        <MainApp />
    </ Provider>
    
    
);

ReactDOM.render(Root, document.getElementById('root'));