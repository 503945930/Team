

import React from "react"
import {FormattedMessage} from "react-intl"
import {connect} from 'react-redux'
import { fetchGuestMessage } from '../actions/messageactions';
import GuestItem from '../components/GuestItem';


class Guest extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
      const { onLoadGuest } = this.props;
      onLoadGuest();
  }
  //
  // const guestList = guestDetail.length>0?guestDetail.map((topic, key) => {
  //     return <p>{topic}</p>
  // }):null;

  render(){
    const {guestDetail} = this.props;
    const guestList = guestDetail ? guestDetail.map(elem => {
      // body...

      return   <GuestItem  key={elem.fields.id} titleCn={elem.fields.title_cn}
        image={elem.fields.photo[0].thumbnails.large.url} nameEn={elem.fields.name_cn}   />

    }):null;


    return (
      <article className="site-main">
        <div className="banner" >
          <img src="./images/guest-header.png"  width="100%" alt="" />
        </div>
        <div className="guest-logo">
          <div className="container">
          <img src="./images/Joycan-Logo.png" width="60px" height="64px" alt=""/>
          </div>
        </div>
        <div className="guest-list">
          {guestList}

        </div>

      </article>
    )

  }

}


const mapStateToProps = (state) => {
  return {
    guestDetail :state.Guest.guestDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadGuest : ()=>{
      dispatch(fetchGuestMessage());
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guest);
