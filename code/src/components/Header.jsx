


import React , {　Component　} from "react"
import {Link} from "react-router"
import RaisedButton from "material-ui/FlatButton"
import {FormattedMessage} from "react-intl"

class Header extends Component {
  constructor(props){
    super(props);
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

  render(){
    return (
      <header className="site-header">
          <div className="container">
              <nav className="navbar" role="navigation">
                  <div className="navbar-header">
                      Logo
                  </div>
                  <div className="collapse navbar-collapse">
                      nav
                      <Link to="/">
                          <RaisedButton style={{"color":"red"}}  label={< FormattedMessage id = "home" />} primary={true}/>
                      </Link>
                      <Link to="/Team">
                          <RaisedButton style={{"color":"red"}} label={< FormattedMessage id = "team" />} primary={true}/>
                      </Link>
                      <Link to="/Contactus">
                          <RaisedButton style={{"color":"red"}} label={< FormattedMessage id = "contactus" />} primary={true}/>
                      </Link>

                      <RaisedButton label="zh" style={{"color":"red"}} primary={true} onClick={this.handleLanghOnclick.bind(this,"zh")}/>
                      <RaisedButton label="en" style={{"color":"red"}} primary={true} onClick={this.handleLanghOnclick.bind(this,"en")}/>
                  </div>
              </nav>
              <div className="banner">
                  banner
              </div>
          </div>
      </header>
    )
  }
}

export default Header
