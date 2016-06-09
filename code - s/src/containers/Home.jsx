import React from "react"
import ReactDOM from 'react-dom';
import {FormattedMessage, FormattedHTMLMessage} from "react-intl"
import classNames from 'classnames';
import Gallery from '../components/Gallery'
import Partner from '../components/Partner';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollDicuzz: false
    };
  }

  componentDidMount() {
    // this.node = this._dizcuss;
    // console.log(this.node.offsetHeight);
    window.addEventListener('scroll', this.handleScroll.bind(this));

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    //console.log(this._dizcuss);
    let scrollTop = event.srcElement.body.scrollTop;

    // console.log("scrollTop",scrollTop);
    // console.log("offsetHeight",this._dizcuss.offsetHeight);
    // console.log("offsetTop",this._dizcuss.offsetTop);
    if (scrollTop >= this._dizcuss.offsetTop - this._dizcuss.offsetHeight) {

      this.setState({scrollDicuzz: true})
    } else {
      this.setState({scrollDicuzz: false})
    }
    //console.log("scrollTop",scrollTop);
  }

  //"animated fadeInUp"
  render() {

    let discuzzClass = classNames({
      "": !this.state.scrollDicuzz,
      "animated fadeInUp": this.state.scrollDicuzz
    })

    return (
      <article className="site-main">
        <div className="banner">
          <Gallery/>
        </div>
        <div className="intro">
          <div className="container">
            <div className="home-logo animated fadeIn">
              <img src="./images/logo.png" alt="" height="70px"/>
            </div>
            <span><FormattedMessage id="webFunction"/></span>
            <div className="clean"></div>
            <div className="student float-left animated bounceInLeft">
              <div className="">
                <img src="./images/student.png" height="100px" alt=""/>
              </div>
            </div>
            <div className="parent float-right animated bounceInRight">
              <div className="">
                <img className="" src="./images/parent.png" height="100px" alt=""/>
              </div>
            </div>
            <div className="clean"></div>
            <div className="student-icon float-left">
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
            </div>
            <div className="parent-icon float-right">
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

            </div>
          </div>
        </div>
        <div className="clean"></div>

        <div className="pic"><img src="../images/nyc-background-img.png"  width="100%" alt=""/></div>

        <div className="dizcuss">
          <div className="container">
            <h1><FormattedMessage id="parentSay"/></h1>
            <div className="teacher-list">
              <ul ref={(d) => this._dizcuss = d}>
                <li className={discuzzClass}>
                  <span className="title"><FormattedMessage id="parentA"/></span>
                  <span className="subtitle"><FormattedMessage id="parentTitleA"/></span>
                  <span className="content">
                    <FormattedMessage id="parentDiscuzzA"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li className={discuzzClass}>
                  <span className="title"><FormattedMessage id="parentB"/></span>
                  <span className="subtitle"><FormattedMessage id="parentTitleB"/></span>
                  <span className="content">
                    <FormattedMessage id="parentDiscuzzB"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li className={discuzzClass}>
                  <span className="title"><FormattedMessage id="parentC"/></span>
                  <span className="subtitle"><FormattedMessage id="parentTitleC"/></span>
                  <span className="content">
                    <FormattedMessage id="parentDiscuzzC"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
              </ul>
            </div>

            <div className="clean"></div>

            <h1><FormattedMessage id="studentSay"/></h1>
            <div className="teacher-list">
              <ul>
                <li className={discuzzClass}>
                  <span className="title"><FormattedMessage id="studentD"/></span>
                  <span className="subtitle"><FormattedMessage id="studentTitleD"/></span>
                  <span className="content">
                    <FormattedMessage id="studentDiscuzzD"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li className={discuzzClass}>
                  <span className="title"><FormattedMessage id="studentE"/></span>
                  <span className="subtitle"><FormattedMessage id="studentTitleE"/></span>
                  <span className="content">
                    <FormattedMessage id="studentDiscuzzE"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
                <li className={discuzzClass}>
                  <span className="title"><FormattedMessage id="studentF"/></span>
                  <span className="subtitle"><FormattedMessage id="studentTitleF"/></span>
                  <span className="content">
                    <FormattedMessage id="studentDiscuzzF"/>
                  </span>
                  <img className="quoteup" src="../images/quote.jpg" />
                  <img className="quoteDown" src="../images/quote2.jpg" />
                </li>
              </ul>
            </div>
          </div>
          <div className="clean"></div>
        </div>
        <Partner   />
      </article>
    )
  }

}

export default Home
