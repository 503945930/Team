import '../css/reset.css';
import '../css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, browserHistory} from 'react-router';
//import Main from './Main'; // Our custom react component
import routes from '../routes/routes'
import {addLocaleData, IntlProvider} from 'react-intl';

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
var arr,
    reg = new RegExp("(^| )" + "site-lang" + "=([^;]*)(;|$)");

let intl=localeEn;
if (arr = document.cookie.match(reg)){
  console.log(arr[2]);
  if(unescape(arr[2]) === "zh"){
     intl = localeZh;
  }
}


// if((navigator.language || navigator.browserLanguage).toLowerCase() !== "zh-cn"){
//     console.log("!==zh-cn");
//     intl = localeEn;
// }

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
    <IntlProvider locale={intl.locales} messages={intl.messages}>
    <Router history={browserHistory} routes={routes}/>
</IntlProvider>, document.getElementById('app'));
