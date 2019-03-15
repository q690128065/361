import React, { Component } from "react";

import storeConnect from "utils/storeConnect";
import actionCreators from "store/menu/actionCreators";

import { Link } from "react-router-dom";

import logo from "images/logo.png";
import head from "images/head.jpg";
import { Search } from "components/input/Input";
import search from "images/search.png";

class Menu extends Component {
  stopProp(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: this.props.menuState ? 0 : "-100%",
          width: "75%",
          height: "100vh",
          background: "#000",
          transition: "all 0.5s ease"
        }}
        onClick={this.stopProp}
      >
        <Link to="/home">
          <div
            style={{
              width: ".43rem",
              height: ".26rem",
              margin: "auto",
              marginTop: ".12rem"
            }}
            onClick={this.props.menuChange.bind(this,false)}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </Link>
        <div style={{ margin: ".25rem auto", textAlign: "center" }}>
        <Link to='/user/personal' onClick={this.props.menuChange.bind(this,false)}>
          <img
            src={localStorage.head?localStorage.head:head}
            alt="head"
            style={{
              width: ".85rem",
              height: ".85rem",
              borderRadius: ".5rem",
              display: "block",
              margin: "auto",
              border: ".03rem solid #fff",
              boxSizing: "content-box"
            }}
            />
            </Link>
          <span
            style={{
              fontSize: ".15rem",
              color: "#fff",
              marginTop: ".15rem",
              display: "block"
            }}
          >
            {localStorage.name || "加入 / 登录 361°"}
          </span>
        </div>
        <Search>
          <input type="text" placeholder="输入关键词" />
          <img src={search} alt="" />
        </Search>
        <ul style={{ width: "80%", margin: ".35rem auto" }}>
          <li
            style={{
              fontSize: ".15rem",
              borderBottom: ".01rem solid #1a1a1a",
              padding: ".14rem 0",
              color: "#fff"
            }}
            onClick={this.props.menuChange.bind(this,false)}
          >
            官网首页
          </li>
          <Link to="/list">
          <li
            style={{
              fontSize: ".15rem",
              borderBottom: ".01rem solid #1a1a1a",
              padding: ".14rem 0",
              color: "#fff"
            }}
            onClick={this.props.menuChange.bind(this,false)}
          >
            商城
          </li>
          </Link>
          <li
            style={{
              fontSize: ".15rem",
              borderBottom: ".01rem solid #1a1a1a",
              padding: ".14rem 0",
              color: "#fff"
            }}
          >
            新闻
          </li>
          <li
            style={{
              fontSize: ".15rem",
              borderBottom: ".01rem solid #1a1a1a",
              padding: ".14rem 0",
              color: "#fff"
            }}
          >
            团购定制
          </li>
        </ul>
      </div>
    );
  }
}

export default storeConnect("menu", Menu, actionCreators);
