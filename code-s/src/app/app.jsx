import '../assets/css/ie10-viewport-bug-workaround.css';
import '../css/reset.css';
import '../css/animate.css';
import '../css/index.css';
import '../css/about.css';
import '../css/guest.css';
import '../css/intro.css';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, browserHistory} from 'react-router';
//import Main from './Main'; // Our custom react component
import routes from '../routes/routes'
import {addLocaleData, IntlProvider} from 'react-intl';
import CookieUtils from "../utils/CookieUtils"
import {Provider} from "react-redux"
import { createStore,applyMiddleware } from "redux";
import  rootReducer  from '../reducers/index'
import thunkMiddleware from "redux-thunk"
import createLogger from 'redux-logger';



import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
import zh from 'react-intl/locale-data/zh';
import localeZh from '../intl/zh.json'
import localeEn from '../intl/en.json';
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

addLocaleData([
  ...en,
  ...fr,
  ...es,
  ...zh
]);

//console.log("language", (navigator.language || navigator.browserLanguage).toLowerCase());

//cookie 操作 后期封装成工具方法
// var arr,
//     reg = new RegExp("(^| )" + "site-lang" + "=([^;]*)(;|$)");
//
// let intl=localeEn;
// if (arr = document.cookie.match(reg)){
//   console.log(arr[2]);
//   if(unescape(arr[2]) === "zh"){
//      intl = localeZh;
//   }
// }




let intl = "";

// if (CookieUtils.getCookieByName("site-lang") === "zh") {
//   intl = localeZh;
// }
console.log("site-lang",CookieUtils.getCookieByName("site-lang"));
console.log((navigator.language || navigator.browserLanguage).toLowerCase());
if(CookieUtils.getCookieByName("site-lang") === null ){
  if((navigator.language || navigator.browserLanguage).toLowerCase() !== "zh-cn"){
      intl = localeEn;
  }else {
      intl = localeZh;
  }
}else {
    if(CookieUtils.getCookieByName("site-lang") === 'zh'){
      intl = localeZh;
    }else {
      intl = localeEn;
    }
}





// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
const logger = createLogger();
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))


ReactDOM.render(
  <Provider store ={store}>
  <IntlProvider locale={intl.locales} messages={intl.messages}>
    <Router history={browserHistory} routes={routes}/>
  </IntlProvider>
</Provider>, document.getElementById('app'));
