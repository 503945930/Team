import React from "react"
import {FormattedMessage,FormattedHTMLMessage} from "react-intl"


const About = () => (
  <article className="site-main">
    <div className="banner">
      <img src="./images/team-header.png" alt="" height="500px" width="100%"/>
    </div>
    <div className="about-logo">
      <img src="./images/Joycan-Logo.png" width="60px" height="64px" alt=""/>
      <FormattedMessage id="team" />
    </div>
    <div className="about-list">
      <div className="a">
        <h1><FormattedMessage id="memberName01" /></h1>
        <h2><FormattedMessage id="memberTitle01" /></h2>
        <FormattedHTMLMessage id="memberDisc01" />

      </div>
      <div className="b">
        <h1><FormattedMessage id="memberName02" /></h1>
        <h2><FormattedMessage id="memberTitle02" /></h2>
        <FormattedHTMLMessage id="memberDisc02" />


      </div>
      <div className="c">
        <h1><FormattedMessage id="memberName03" /></h1>
        <h2><FormattedMessage id="memberTitle03" /></h2>
        <FormattedHTMLMessage id="memberDisc03" />


      </div>

      <div className="d">
        <h1><FormattedMessage id="memberName04" /></h1>
        <h2><FormattedMessage id="memberTitle04" /></h2>
        <FormattedHTMLMessage id="memberDisc04" />


      </div>
      <div className="e">
        <h1><FormattedMessage id="memberName05" /></h1>
        <h2><FormattedMessage id="memberTitle05" /></h2>
        <FormattedHTMLMessage id="memberDisc05" />


      </div>

      <div className="f">
        <h1><FormattedMessage id="memberName06" /></h1>
        <h2><FormattedMessage id="memberTitle06" /></h2>
        <FormattedHTMLMessage id="memberDisc06" />


      </div>

    </div>

  </article>

)

export default About
