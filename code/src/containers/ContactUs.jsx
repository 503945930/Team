import '../css/index.css';

import React from "react"
import {FormattedMessage} from "react-intl"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const ContactUs = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>

            <div className="site-container">
                <div className="intro">
                    1
                </div>
                <div className="intro">
                    2
                </div>
                <div className="intro">
                    3
                </div>
                <div className="intro">
                    4
                </div>

                <div className="information">
                    表单
                    <form className="" action="index.html" method="post"></form>
                </div>

            </div>


        </div>
    </MuiThemeProvider>
)


export default ContactUs
