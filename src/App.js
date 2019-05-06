import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import storeConnect from "utils/storeConnect";
import actionCreators from "store/menu/actionCreators";

import Home from "pages/Home";
import User from "pages/User";
import List from "pages/List";
import Cart from "pages/Cart";
import Detail from "pages/Detail";

import Menu from "pages/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <div onClick={this.props.menuChange.bind(this,false)}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/list" component={List} />
            {localStorage.phone?<Route path="/cart" component={Cart}  />:<Redirect to='/user'/>}
            
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </div>
          <Menu />
      </div>
    );
  }
}

export default withRouter(storeConnect("menu", App, actionCreators));
