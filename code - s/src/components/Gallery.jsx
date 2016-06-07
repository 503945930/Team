import React, {Component} from "react"
import Slider from 'react-slick';

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
      autoplay:true
    };

    return (

      <Slider {...settings}>
        <div class="pic">
          <img src="../images/header1.png" height="600px" width="100%" alt="" />
        </div>
        <div class="pic">
          <img src="../images/header2-campus.png" height="600px" width="100%" alt="" />
        </div>
        <div class="pic">
          <img src="../images/header3-world.png" height="600px" width="100%" alt="" />
        </div>
        <div class="pic">
          <img src="../images/header4.png" height="600px" width="100%" alt="" />
        </div>
      </Slider>

    )

  }
}

export default Gallery;
