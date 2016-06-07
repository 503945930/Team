import React, {Component} from "react"
import {FormattedMessage} from 'react-intl'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer">
            <div className="item">
              <span><FormattedMessage id='footerCompany'/></span>
              <ul>
                <li>
                  <a href="#"><FormattedMessage id='footerLinkIntro'/></a>
                </li>
                <li>
                  <a href="#"><FormattedMessage id='footerLinkAbout'/></a>
                </li>
                <li>
                  <a href="#"><FormattedMessage id='footerLinkGuest'/></a>
                </li>
              </ul>
            </div>
            <div className="item">
              <span><FormattedMessage id='footerContact'/></span>
              <ul>
                <li>
                  <a href="#"><FormattedMessage id='footerEmail'/></a>
                </li>
              </ul>
            </div>
            <div className="item">
              <span><FormattedMessage id='footerAddress'/></span>
              <ul>
                <li>
                  <a href="#"><FormattedMessage id='footerAddressDetail'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <a href="">&copy;
              <FormattedMessage id='footerCopyRight'/></a>
            <img src="./images/logo.png" height="60px" alt=""/></div>
        </div>
      </footer>

    )
  }
}

export default Footer
