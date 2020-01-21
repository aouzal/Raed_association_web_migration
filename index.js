import React from 'react'
import { createStore } from 'redux'
import configureStore from './store'
import ReactDom from 'react-dom';
import App from "./src/Components/App.js"
import { Provider } from "react-redux";
import 'babel-polyfill';
import { BrowserRouter } from 'react-router-dom'



const root = document.getElementById('root');


ReactDom.render(

    <Provider store={configureStore()} >
        
            <App />
        
    </Provider>
    , root
);


