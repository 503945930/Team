import React, {Component} from "react"
import {FormattedMessage} from 'react-intl'

class Partner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="partner">
        <div className="container">
          <span>合作伙伴</span>
          <div className="partner-list">
            <div className="item">
              <img src="./images/wtct.png" alt="" height="42px"/>
            </div>
            <div className="item">
              <img src="./images/zkgg.png" alt=""   height="42px"/>
            </div>
            <div className="item">
              <img src="./images/china-huskies.png" alt="" height="42px"/>
            </div>
            <div className="item">
              <img src="./images/zkzb.png" alt=""  height="42px"/>
            </div>
            <div className="item">
              <img src="./images/oz.png" alt="" height="30px" width="440px"/>
            </div>
            <div className="item">
              <img src="./images/CUK-logo.png"  alt="" height="42px"/>
            </div>
            <div className="item">
              <img src="./images/asterRide.png" alt="" height="42px"/>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Partner
