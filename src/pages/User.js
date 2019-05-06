import React, { Component } from "react";
import Header from "components/header/Header";
import { Route } from "react-router-dom";

import storeConnect from "utils/storeConnect";
import actionCreators from 'store/login/actionCreators';


import Personal from "components/user/Personal";
import Login from "components/user/Login";
import Register from "components/user/Register";

class User extends Component {
  
  render() {
    return (
      <div style={{width:"100%",height:"100vh"}}>
        <Header />
        <Route path='/user' exact component={this.props.loginState?Personal:Login}/>
        <Route path='/user/register' component={Register}/>
      </div>
    );
  }
}

export default storeConnect('login',User,actionCreators);
