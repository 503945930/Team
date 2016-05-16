import React, {Component} from "react"
import {Link} from "react-router"
import RaisedButton from "material-ui/FlatButton"
import {FormattedMessage} from "react-intl"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLang: true
    }
  }

  // 打开语言下拉选择
  handleShowLanghOnclick(e){
    this.setState({
      showLang: !this.state.showLang
    });


  }
  //选择语言
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
      <header className="site-header navbar navbar-static-top bs-docs-nav " id="top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Teambition</a>
          </div>
          <nav id="bs-navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">
                  <FormattedMessage id = "home" />
                </Link>
              </li>
              <li>
                <Link to="/About">
                  <FormattedMessage id = "about" />
                </Link>
              </li>
              <li>
                <Link to="/Contactus">
                  <FormattedMessage id = "contactus" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id = "blog" />
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                  onClick = {this.handleShowLanghOnclick.bind(this)} aria-haspopup="true" aria-expanded="false" >
                  语言<span className="caret"></span>
                </a>
                <ul className= {this.state.showLang ? 'dropdown-menu hidden' : 'dropdown-menu visible'} >
                  <li>
                    <a href="#" onClick={this.handleLanghOnclick.bind(this,"zh")}>中文版</a>
                  </li>
                  <li>
                    <a href="#" onClick={this.handleLanghOnclick.bind(this,"en")}>English</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="jumbotron">
          <div className="item"></div>
        </div>
      </header>

    )
  }
}

export default Header
