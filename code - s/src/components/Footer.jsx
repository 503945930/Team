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
                  <a href="intro"><FormattedMessage id='footerLinkIntro'/></a>
                </li>
                <li>
                  <a href="about"><FormattedMessage id='footerLinkAbout'/></a>
                </li>
                <li>
                  <a href="guest"><FormattedMessage id='footerLinkGuest'/></a>
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

            <img src="./images/logo.png" height="60px" alt="" id="logo"/>

            <img src="./images/qrcode.jpg" width="100px" height="100px"/>
          </div>

          <div className="copyright-line text-align:center;">
            &copy;
             <FormattedMessage id='footerCopyRight'/>
          </div>

        </div>
      </footer>

    )
  }
}

export default Footer
