import React from 'react'
import {Route, IndexRoute, Link} from 'react-router'
import App from "../containers/App"
import About from "../containers/About"
import Guest from "../containers/Guest"
import Home from "../containers/Home"
import Intro from "../containers/Intro"
import Test from "../containers/Test"
//路由控制

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="guest" component={Guest}/>
        <Route path="intro" component={Intro}/>
        <Route path="test" component={Test}/>
    </Route>
)

export default routes
