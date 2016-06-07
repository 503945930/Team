import React, {Component} from "react"

class GuestItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  className="item">
          <img src={this.props.image} height="200px" width="100%" alt=""/>
          <span>{this.props.nameEn}</span><br/>
          <span>{this.props.titleCn}</span>
      </div>

    )
  }
}

export default GuestItem
