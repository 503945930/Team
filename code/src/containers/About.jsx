import React from "react"
import {FormattedMessage} from "react-intl"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const About = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>

          <div className="site-container">
              <div className="avatar">
                  avatar
              </div>
          </div>


        </div>
    </MuiThemeProvider>
)

export default About
