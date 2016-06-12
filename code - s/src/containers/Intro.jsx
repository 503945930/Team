import React from "react"
import {FormattedHTMLMessage} from "react-intl"
import Partner from '../components/Partner';

const Intro = () => (
  <article className="site-main">

    <div className="banner">
      <img src="./images/company-header.png" width="100%" alt="" />
    </div>
    <div className="intro-wrap">
      <div className="container">
        <div className="intro-logo">
          <img src="./images/introLogo.png" width="250px" height="75px" alt=""/>
        </div>
        <div className="intro-list">
          <FormattedHTMLMessage id="introduction_details"/>
        </div>
      </div>
    </div>
    <Partner/>
  </article>
)
export default Intro;
