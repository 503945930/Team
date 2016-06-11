import React, {Component} from "react"
import {Link} from "react-router"
import {FormattedMessage} from "react-intl"
import Gallery from "./Gallery"
import CookieUtils from "../utils/CookieUtils";
import {connect} from 'react-redux';
import { changeLanguage } from '../actions/languageactions'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLang: true,
      responsive: true
    }
  }

  // 打开语言下拉选择
  handleShowLanghOnclick(e) {
    this.setState({
      showLang: !this.state.showLang
    });

  }

  handleTouchTap(e){
    console.log(this.state.responsive);
    this.setState({
      responsive: !this.state.responsive
    });
  }
  //选择语言
  handleLanghOnclick(locale, e) {
    e.preventDefault();
    //  document.cookie = "site-lang" + "=" + "zh"  + "; path=/";
    //writeCookie("site-lang", "zh");
    // let Days = 30;
    // let exp = new Date();
    // exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    // document.cookie = "site-lang" +
    //   "=" + escape(locale) + ";expires=" + exp.toGMTString();

    CookieUtils.writeCookie("site-lang", locale);

    window.location.reload();
    //console.log(document.cookie);
  }

  render() {

    const {language} = this.props;
    console.log("logo_i18n",language);
    return (
      <header className="site-header navbar navbar-static-top bs-docs-nav " id="top" role="banner">
        <div className="container">
        <div className="logo float-left">
          <Link to="/">
            <img src="./images/logo.png" alt="" height="40px"/>
          </Link>
        </div>

        <ul className={this.state.responsive ? "topnav" : "topnav responsive"}>
          <li>
            <Link to="intro"><FormattedMessage id="introduction" /></Link>
          </li>
          <li>
            <Link to="about"><FormattedMessage id="about" /></Link>
          </li>
          <li>
            <Link to="guest"><FormattedMessage id="guest" /></Link>
          </li>
          <li className="icon">
            <a href="#" onTouchTap={this.handleTouchTap.bind(this)} style={{fontSize:15}}>☰</a>
          </li>
          <li>
            <a href="#" onTouchTap = {this.handleLanghOnclick.bind(this,'zh')} >中文</a>
          </li>
          <li>
            <a href="#" onTouchTap = {this.handleLanghOnclick.bind(this,'en')} >英文</a>
          </li>
        </ul>
      </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("header",state);
  return {
    language:state.Guest.language
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
)(Header)
