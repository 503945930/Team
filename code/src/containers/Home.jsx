import React from "react"
import { FormattedMessage } from "react-intl"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

const Home = ({intl}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <div >
    <RaisedButton label={<FormattedMessage id="home" />} />
    <FormattedMessage id="home" />
  </div>
 </MuiThemeProvider>
)

export default Home
