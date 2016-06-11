import React, {Component} from "react"
import Slider from 'react-slick';
import CookieUtils from "../utils/CookieUtils";

class Gallery extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };


    const language = CookieUtils.getCookieByName("site-lang");
    if(language === 'zh'){
      return (
        <Slider {...settings}>
          <div class="pic">
            <img src="../images/header1.png" width="100%" alt=""/>
          </div>
          <div class="pic">
            <img src="../images/header2-campus.png" width="100%" alt=""/>
          </div>
          <div class="pic">
            <img src="../images/header3-world.png" width="100%" alt=""/>
          </div>
          <div class="pic">
            <img src="../images/header4.png" width="100%" alt=""/>
          </div>
        </Slider>
      )
    }else {
      return (
        <Slider {...settings}>
          <div class="pic">
            <img src="../images/header1_en.png" width="100%" alt=""/>
          </div>
          <div class="pic">
            <img src="../images/header2-campus_en.png" width="100%" alt=""/>
          </div>
          <div class="pic">
            <img src="../images/header3-world_en.png" width="100%" alt=""/>
          </div>
          <div class="pic">
            <img src="../images/header4_en.png" width="100%" alt=""/>
          </div>
        </Slider>
      )
    }



  }
}

export default Gallery;
