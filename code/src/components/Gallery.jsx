import React, {Component} from "react"
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {
  constructor(props) {
    super(props)
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  handlePlay() {
    this._imageGallery.play()
  }

  handlePause() {
    this._imageGallery.pause()
  }

  render() {
    const images = [
      {
        original: '../images/hero.jpg',
        description: 'Optional description...'
      }, {
        original: '../images/hero1.jpg',
        description: 'Optional description...'
      }, {
        original: '../images/hero2.jpg',
        description: 'Optional description...'
      }
    ]

    return (
      <div>
        <ImageGallery ref={i => this._imageGallery = i}
          items={images}
          slideInterval={2000}
          showNav={false}
          showThumbnails={false}
          fullscreen={false}
          showBullets={true}
          autoPlay={true}
          handleImageLoad={this.handleImageLoad}/>
      </div>
    );
  }

}

export default Gallery
