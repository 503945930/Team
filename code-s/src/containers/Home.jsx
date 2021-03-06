import React from "react"
import ReactDOM from 'react-dom';
import {FormattedMessage, FormattedHTMLMessage} from "react-intl"
import classNames from 'classnames';
import Gallery from '../components/Gallery'
import Partner from '../components/Partner';
import ScrollEffect from '../js/scroll-effects.jsx';
import CookieUtils from "../utils/CookieUtils";


class Home extends React.Component {

  constructor(props){
    super(props)
  }

  //"animated fadeInUp"
  render() {

    const language = CookieUtils.getCookieByName("site-lang");

    const student = language === 'zh' ? (
      <img src="./images/student.png"  alt=""/>
    ):(
      <img src="./images/student_en.png"  alt=""/>
    )

    const teacher = language === 'zh' ? (
      <img className="" src="./images/parent.png"  alt=""/>
    ):(
      <img className="" src="./images/parent_en.png" alt=""/>
    )



    return (
      <article className="site-main">
        <div className="banner animated fadeIn">
          <Gallery/>
        </div>
        <div className="intro animated fadeIn">
          <div className="container">
            <div className="home-logo animated fadeIn" >
              <img src="./images/logo.png" alt="" height="70px"/>
            </div>

            <div className="value prop animated fadeIn">
              <span><FormattedMessage id="webFunction"/></span>
            </div>
            <div className="clean"></div>

            <ScrollEffect className="student float-left" animate="bounceInLeft">
              <div className="pic">
                {student}

              </div>
            </ScrollEffect>
            <ScrollEffect className="parent float-right" animate="bounceInRight">
              <div className="pic">
                {teacher}
              </div>
            </ScrollEffect>
            <div className="clean"></div>
         <div className="icon-container">

            <ScrollEffect className="icon float-left" animate="fadeInLeft">
              <div className="item">
                <img src="./images/lecture.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="studentHelpOne"/></span>
              </div>
              <div className="item">
                <img src="./images/lesson.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="studentHelpTwo"/></span>
              </div>
              <div className="item">
                <img src="./images/1-1.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="studentHelpThree"/></span>
              </div>
              <div className="item">
                <img src="./images/jobs.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="studentHelpFour"/></span>
              </div>
            </ScrollEffect>


            <ScrollEffect className="icon float-right" animate="fadeInRight">
              <div className="item">
                <img src="./images/lecture.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="teacherHelpOne"/></span>
              </div>
              <div className="item">
                <img src="./images/2-1.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="teacherHelpTwo"/></span>
              </div>
              <div className="item">
                <img src="./images/camp.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="teacherHelpThree"/></span>
              </div>
              <div className="item">
                <img src="./images/jobs.png" alt="" width="60px" height="60px"/>
                <span><FormattedHTMLMessage id="teacherHelpFour"/></span>
              </div>
            </ScrollEffect>
            </div>
          </div>
        </div>
        <div className="clean"></div>

        <div className="pic"><img src="../images/nyc-background-img.png"  width="100%" alt=""/></div>

        <div className="dizcuss">
          <div className="container">
            <ScrollEffect className="teacher-list" animate="fadeIn">
              <h1><FormattedMessage id="parentSay"/></h1>
              <ul>
                <li>
                  <span className="title"><FormattedMessage id="parentA"/></span>
                  <span className="subtitle"><FormattedMessage id="parentTitleA"/></span>
                  <span className="content">
                    <FormattedMessage id="parentDiscuzzA"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li>
                  <span className="title"><FormattedMessage id="parentB"/></span>
                  <span className="subtitle"><FormattedMessage id="parentTitleB"/></span>
                  <span className="content">
                    <FormattedMessage id="parentDiscuzzB"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li>
                  <span className="title"><FormattedMessage id="parentC"/></span>
                  <span className="subtitle"><FormattedMessage id="parentTitleC"/></span>
                  <span className="content">
                    <FormattedMessage id="parentDiscuzzC"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
              </ul>
            </ScrollEffect>



            <div className="clean"></div>

            <ScrollEffect className="teacher-list" animate="fadeIn">
              <h1><FormattedMessage id="studentSay"/></h1>
              <ul>
                <li>
                  <span className="title"><FormattedMessage id="studentD"/></span>
                  <span className="subtitle"><FormattedMessage id="studentTitleD"/></span>
                  <span className="content">
                    <FormattedMessage id="studentDiscuzzD"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li>
                  <span className="title"><FormattedMessage id="studentE"/></span>
                  <span className="subtitle"><FormattedMessage id="studentTitleE"/></span>
                  <span className="content">
                    <FormattedMessage id="studentDiscuzzE"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li>
                  <span className="title"><FormattedMessage id="studentF"/></span>
                  <span className="subtitle"><FormattedMessage id="studentTitleF"/></span>
                  <span className="content">
                    <FormattedMessage id="studentDiscuzzF"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
              </ul>
            </ScrollEffect>
          </div>
        </div>
        <div className="clean"></div>
        <Partner/>
      </article>
    )
  }

}

export default Home
