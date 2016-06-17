import React, {Component} from "react";
import CookieUtils from "../utils/CookieUtils";

class GuestItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const language = CookieUtils.getCookieByName("site-lang");
    if(language === 'zh'){
      return (
        <div  className="item">
            <img src={this.props.image} height="200px" width="100%" alt=""/>
            <span>{this.props.nameCn}</span><br/>
            <span>{this.props.titleCn}</span>
        </div>

      )

    }else {
      return (
        <div  className="item">
            <img src={this.props.image} height="200px" width="100%" alt=""/>
            <span>{this.props.nameEn}</span><br/>
            <span>{this.props.titleEn}</span>
        </div>

      )
    }


  }
}

export default GuestItem
