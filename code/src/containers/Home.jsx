import React from "react"
import { FormattedMessage } from "react-intl"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';


const Home = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>

      <div className="site-container">
          <div className="features">
              features
          </div>
          <div className="apps">
              apps
          </div>
          <div className="cases">
              cases
          </div>
          <div className="goto-work">
              goto-work
          </div>
      </div>
    
    </div>
 </MuiThemeProvider>
)

export default Home
