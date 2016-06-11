import React, {Component} from "react";
import {connect} from 'react-redux';
import {FormattedMessage} from "react-intl"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CookieUtils from "../utils/CookieUtils";
import { changeLanguage } from '../actions/languageactions'
import localeZh from '../intl/zh.json'
import localeEn from '../intl/en.json';
//import { writeCookie } from "../utils/CookieUtils";


class App extends Component {

    constructor(props) {
        super(props);
        //  this.handleZhOnclick =this.handleZhOnclick.bind(this);

    }
    componentWillMount(){
      const { changeLanguage } =this.props;
      changeLanguage('en');

    }

    handleLanghOnclick(locale, e) {
        e.preventDefault();
        //  document.cookie = "site-lang" + "=" + "zh"  + "; path=/";
        //writeCookie("site-lang", "zh");
        // let Days = 30;
        // let exp = new Date();
        // exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        // document.cookie = "site-lang" +
        //     "=" + escape(locale) + ";expires=" + exp.toGMTString();


        CookieUtils.writeCookie("site-lang", "zh");
        window.location.reload();
        //console.log(document.cookie);
    }

    render() {
        return (

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



        )
    }
}


const mapStateToProps = (state) => {
//  console.log("appstate",state.language);
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage:(lang)=>{
        dispatch(changeLanguage(lang))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
