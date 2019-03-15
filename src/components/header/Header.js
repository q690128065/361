import React, { Component } from "react";
import { Link} from "react-router-dom";

import { Content, Menu, Logo, User } from "./HeaderItem";
import menu from "images/menu.png";
import logo from "images/logo.png";
import user from "images/user.png";
import cart from "images/cart.png";

import  storeConnect  from 'utils/storeConnect';
import actionCreators from 'store/menu/actionCreators';

class Header extends Component {
  menuShow(e){
    this.props.menuChange(true)
    e.stopPropagation()
  }
  render() {
    return (
        <Content>
          <Menu onClick={this.menuShow.bind(this)} >
            <img src={menu} alt=""/>
          </Menu>
          <Logo>
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </Logo>
          <User>
            <Link to="/user">
              <img src={user} alt="" />
            </Link>
            <Link to="/cart">
                <img src={cart} alt="" />
            </Link>
          </User>
        </Content>
    );
  }
}

export default storeConnect('menu',Header,actionCreators) ;
