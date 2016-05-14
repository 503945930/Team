import '../css/index.css';

import React from "react"
import {FormattedMessage} from "react-intl"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const ContactUs = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>

            <div class="site-container">
                <div class="intro">
                    1
                </div>
                <div class="intro">
                    2
                </div>
                <div class="intro">
                    3
                </div>
                <div class="intro">
                    4
                </div>

                <div class="information">
                    表单
                    <form class="" action="index.html" method="post"></form>
                </div>

            </div>


        </div>
    </MuiThemeProvider>
)


export default ContactUs
