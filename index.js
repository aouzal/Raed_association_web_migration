import React from 'react'
import {createStore} from 'redux'
import configureStore   from './store'
import ReactDom from 'react-dom';
import App from "./src/Components/App.js"
import { Provider } from "react-redux";
import 'babel-polyfill';
// css
// // import "./Locale/Theme/bootstrap/bootstrap.css"
//  import "./Locale/Theme/css/style.css"
// // import "./Locale/Theme/fonts/css/font-awesome.min.css"
//  import "./Locale/Theme/plugins/sliderMaster/css/slider.css"
// // import "./Locale/Theme/plugins/iziToast-master/css/iziToast.css"
// // // js
// // // import "./Locale/Theme/js/jquery.js"
// // // import "./Locale/Theme/bootstrap/bootstrap.js"
//  import "./Locale/Theme/plugins/iziToast-master/js/iziToast.min.js"
//  import "./Locale/Theme/plugins/sliderMaster/js/jquery.sliderPro.min.js"
//  import "./Locale/Theme/plugins/scrollReveal/js/scrollreveal.min.js"  
//  import   "./Locale/Theme/plugins/scrollReveal/js/myAnimations.js"
//  import "./Locale/Theme/js/iziToast.js"




const root =document.getElementById('root');


ReactDom.render(
    <Provider store={configureStore()} >
         <App/>
     </Provider>
    ,root
);


