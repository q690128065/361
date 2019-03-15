import React, { Component } from "react";

import storeConnect from "utils/storeConnect";
import actionCreators from "store/login/actionCreators";

import logo from "images/logo.png";
import { Input, Radio, Button } from "components/input/Input";
import { Link } from "react-router-dom";
import { Toast } from "antd-mobile";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone: null,
      password: null,
      repetition: null,
      remember: true
    };
  }
  model() {
    this.setState({
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      password: this.refs.password.value,
      repetition: this.refs.repetition.value
    });
  }
  changeRemember() {
    this.setState({
      remember: !this.state.remember
    });
  }
  login() {
    let { name, phone, password, repetition, remember } = { ...this.state };
    if (remember) {
      if (phone.length !== 11) {
        Toast.fail("手机号长度不对，需要11位", 1);
      } else if (password.length < 6 || password.length > 16) {
        Toast.fail("密码长度不正确，请输入 6 - 16位密码", 1);
      } else if (password !== repetition) {
        Toast.fail("重复密码不正确", 1);
      } else {
        localStorage.rephone = phone;
        localStorage.repassword = password;
        localStorage.name = name;
        Toast.success("注册成功", 1);

        setTimeout(() => {
          this.props.history.replace("/");
        }, 1000);
      }
    } else {
      Toast.fail("请阅读并同意商城协议", 1);
    }
  }
  render() {
    let { name, phone, password, repetition, remember } = { ...this.state };
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
              placeholder={"请输入昵称"}
              defaultValue={name}
              ref="name"
              onChange={this.model.bind(this)}
            />
            <Input
              placeholder={"请输入手机号"}
              defaultValue={phone}
              ref="phone"
              onChange={this.model.bind(this)}
            />
            <Input
              placeholder={"请输入6至16位密码"}
              ref="password"
              type="password"
              defaultValue={password}
              onChange={this.model.bind(this)}
            />
            <Input
              placeholder={"请重复输入6至16位密码"}
              ref="repetition"
              type="password"
              defaultValue={repetition}
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
                我已经阅读并同意 《361°商城协议》
              </span>
            </div>
            <Button onClick={this.login.bind(this)}>立即注册</Button>
          </form>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: ".15rem",
                color: "#1A1A1A"
              }}
            >
              已有361°商城账号？
            </span>
            <Link to="/user/login">
              <span
                style={{
                  color: "#f99302",
                  fontSize: ".15rem"
                }}
              >
                立即登录
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default storeConnect("login", Register, actionCreators);
