import React from 'react'
import {Route, IndexRoute, Link} from 'react-router'
import App from "../containers/App"
import About from "../containers/About"
import ContactUs from "../containers/ContactUs"
import Home from "../containers/Home"


//路由控制

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="About" component={About}/>
        <Route path="Contactus" component={ContactUs}/>
    </Route>
)

export default routes
