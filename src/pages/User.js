import React, { Component } from "react";
import Header from "components/header/Header";
import { Route } from "react-router-dom";

import storeConnect from "utils/storeConnect";
import actionCreators from 'store/login/actionCreators';


import Personal from "components/user/Personal";
import Login from "components/user/Login";
import Register from "components/user/Register";

class User extends Component {
  
  componentWillMount(){
    if(!this.props.loginState){
      this.props.history.push('/user/login')
    }else{
      this.props.history.push('/user/personal')
    }
  }
  render() {
    return (
      <div style={{width:"100%",height:"100vh"}}>
        <Header />
        <Route path="/user/personal" component={Personal} exact />
        <Route path="/user/login" component={Login} exact/>
        <Route path="/user/register" component={Register} exact />
      </div>
    );
  }
}

export default storeConnect('login',User,actionCreators);
