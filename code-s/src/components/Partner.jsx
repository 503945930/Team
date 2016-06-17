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
          <FormattedMessage id="partner" />
          <div className="partner-list">
            <div className="item">
              <img src="./images/wtct.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/zkgg.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/china-huskies.png" alt=""/>
            </div>
            <div className="item">
              <img src="./images/zkzb.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/oz.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/CUK-logo.png"  alt="" />
            </div>
            <div className="item">
              <img src="./images/asterRide.png" alt="" />
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Partner
