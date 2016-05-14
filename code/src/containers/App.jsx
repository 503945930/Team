import React, {Component} from "react"

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import {FormattedMessage} from "react-intl"
import Header from "../components/Header"
import Footer from "../components/Footer"

import localeZh from '../intl/zh.json'
import localeEn from '../intl/en.json';
//import { writeCookie } from "../utils/CookieUtils";

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class App extends Component {

    constructor(props) {
        super(props);
        //  this.handleZhOnclick =this.handleZhOnclick.bind(this);

    }

    handleLanghOnclick(locale, e) {
        e.preventDefault();
        //  document.cookie = "site-lang" + "=" + "zh"  + "; path=/";
        //writeCookie("site-lang", "zh");
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = "site-lang" +
            "=" + escape(locale) + ";expires=" + exp.toGMTString();

        window.location.reload();
        //console.log(document.cookie);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                  <div>
                      <Header/>
                  </div>


                    <div>
                        {this.props.children}
                    </div>
                    <div>
                        <Footer/>
                    </div>

                </div>


            </MuiThemeProvider>
        )
    }
}

export default App
