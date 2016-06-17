import React, {Component} from "react"
import {Link} from "react-router"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from "material-ui/FlatButton"
import {FormattedMessage} from "react-intl"
import localeZh from '../intl/zh.json'
import localeEn from '../intl/en.json';
//import { writeCookie } from "../utils/CookieUtils";

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});



class App extends Component {

    constructor(props){
      super(props);
    //  this.handleZhOnclick =this.handleZhOnclick.bind(this);

    }


    handleLanghOnclick(locale,e) {
        e.preventDefault();
      //  document.cookie = "site-lang" + "=" + "zh"  + "; path=/";
        //writeCookie("site-lang", "zh");
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = "site-lang" + "=" + escape(locale) + ";expires=" + exp.toGMTString();


        window.location.reload();
        //console.log(document.cookie);
    }



    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <header>
                        <Link to="/">
                            <RaisedButton label={< FormattedMessage id = "home" />} primary={true}/>
                        </Link>
                        <Link to="/Team">
                            <RaisedButton label={< FormattedMessage id = "team" />} primary={true}/>
                        </Link>
                        <Link to="/Contactus">
                            <RaisedButton label={< FormattedMessage id = "contactus" />} primary={true}/>
                        </Link>
                    </header>

                    <div>
                        {this.props.children}
                    </div>

                    <div>
                        <RaisedButton label="zh" primary={true} onClick={this.handleLanghOnclick.bind(this,"zh")}/>
                        <RaisedButton label="en" primary={true} onClick={this.handleLanghOnclick.bind(this,"en")}/>
                    </div>

                </div>

            </MuiThemeProvider>
        )
    }
}

export default App
