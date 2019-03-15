import React, { Component } from "react";
import storeConnect from "utils/storeConnect";
import actionCreators from "store/login/actionCreators";

import logo from "images/logo.png";
import { Input, Radio, Button } from "components/input/Input";
import { Link } from "react-router-dom";
import { Toast } from "antd-mobile";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      password: null,
      remember: true
    };
  }
  model() {
    this.setState({
      phone: this.refs.phone.value,
      password: this.refs.password.value
    });
  }
  changeRemember() {
    this.setState({
      remember: !this.state.remember
    });
  }
  login() {
    let { phone, password, remember } = { ...this.state };
    if (
      phone === localStorage.rephone &&
      password === localStorage.repassword
    ) {
      if (remember) {
        localStorage.phone = phone;
        localStorage.password = password;
      }
      Toast.success("登录成功", 1);
      setTimeout(() => {
        this.props.history.push("/user");
      }, 1000);
      this.props.login();
    } else {
      Toast.fail("账号或密码不正确，请重新输入", 1);
    }
  }
  render() {
    let { phone, password, remember } = { ...this.state };
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#fff",
          overflow: "hidden"
        }}
      >
        <div style={{ width: "80%", margin: "1rem auto" }}>
          <img
            src={logo}
            alt=""
            style={{
              width: ".43rem",
              height: ".26rem",
              margin: "auto",
              display: "block"
            }}
          />
          <form style={{ marginTop: ".25rem" }}>
            <Input
              placeholder={"请输入账号或手机号"}
              defaultValue={phone}
              ref="phone"
              onChange={this.model.bind(this)}
            />
            <Input
              placeholder={"输入密码"}
              ref="password"
              type="password"
              defaultValue={password}
              onChange={this.model.bind(this)}
            />
            <div
              style={{
                display: "flex",
                margin: ".08rem auto",
                alignItem: "center"
              }}
            >
              <Radio
                checked={remember}
                onClick={this.changeRemember.bind(this)}
              />
              <span style={{ fontSize: ".12rem", color: "#808080" }}>
                （记住我）两周内自动登录
              </span>
            </div>
            <Button onClick={this.login.bind(this)}>立即登录</Button>
          </form>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: ".15rem",
                color: "#1A1A1A",
                padding: "0 .2rem"
              }}
            >
              忘记密码
            </span>
            <Link to="/user/register">
              <span
                style={{
                  color: "#f99302",
                  fontSize: ".15rem",
                  padding: "0 .2rem",
                  borderLeft: "0.01rem solid #F0F0F0"
                }}
              >
                注册361°账号
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default storeConnect("login", Login, actionCreators);