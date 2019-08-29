
import * as React from "react";
import { Router, Route, } from "react-router-dom";
import history from './config/history'
import Login from './components/Login/Login';
import SignUp from "./components/SignUp/SignUp";
import Home from './components/Home/Home';

class APP extends React.Component{
  render(){
    return(
        <Router history={history}>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/SignUp" component={SignUp}/>
        </Router>
    )
  }
}

export default APP