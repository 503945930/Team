import React, {Component} from "react"

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site-footer">

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 text">
                Copyright © 2013-2016 Teambition沪ICP备11014111号-2
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="sns-info">
                  <a href="" className="icon icon-wechat">
                    <i className="fa fa-weixin fa-5" aria-hidden="true"></i>
                  </a>
                  <a href="" className="icon icon-wechat">
                    <i className="fa fa-weibo fa-5" aria-hidden="true"></i>
                  </a>
                  <a href="" className="icon icon-wechat">
                    <i className="fa fa-qq fa-5" aria-hidden="true"></i>
                  </a>
                  <a href="" className="icon icon-wechat">
                    <i className="fa fa-rss fa-5" aria-hidden="true"></i>
                  </a>
                  <a href="" className="icon icon-wechat">
                    <i className="fa fa-dribbble fa-5" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer
