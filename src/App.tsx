
import * as React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from "./components/SignUp/SignUp";
import Index from "./components/Index/Index";

class APP extends React.Component{
  render(){
    return(
        <Router>
          <Route exact={true} path="/" component={Index}/>
          <Route path="/login" component={Login}/>
          <Route path="/topics" component={SignUp}/>
        </Router>
    )
  }
}

export default APP