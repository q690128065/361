import React, { Component } from "react";
import head from "images/head.jpg";
import more from "images/more.png";

import { Order, More } from "./StylePersonal";
import { ImagePicker } from "antd-mobile";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: localStorage.head ? localStorage.head : head
    };
  }
  onChange(a) {
    localStorage.head = a[0].url;
    this.setState({
      head: localStorage.head
    });
  }
  addHead(a){
    console.log(a)
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%", background: "#fff" }}>
        {/* 个人信息 */}
        <div
          style={{
            padding: ".25rem 0",
            background: "#000",
            position: "relative"
          }}
        >
          <img
            src={this.state.head}
            alt="head"
            style={{
              width: ".85rem",
              height: ".85rem",
              marginLeft: ".25rem",
              borderRadius: "50%",
              border: ".03rem solid #fff",
              boxSizing: "content-box"
            }}
          />
          <div
            style={{
              width: "40%",
              display: "inline-block",
              verticalAlign: "top",
              padding: ".27rem .15rem",
              boxSizing: "content-box"
            }}
          >
            <h2 style={{ width: "100%", fontSize: ".15rem", color: "#fff" }}>
              {localStorage.name}{" "}
              <span style={{ fontSize: ".12rem", color: "#ccc" }}>
                {" "}
                (普通会员)
              </span>
            </h2>
            <p
              style={{ fontSize: ".12rem", color: "#fff", marginTop: ".09rem" }}
            >
              <span style={{ color: "#F99302", marginRight: ".05rem" }}>0</span>
              积分
            </p>
          </div>
          <i
            style={{
              width: ".1rem",
              height: ".1rem",
              position: "absolute",
              top: "50%",
              right: ".1rem",
              background: `url(${more}) no-repeat 100%`
            }}
          >
            {" "}
          </i>
        </div>
        {/* 全部订单 */}
        <Order>
          <div className="order-head">
            <h2>全部订单</h2>
            <span>查看全部订单</span>
          </div>
          <ul>
            <li>
              <span>0</span>
              <p>代付款</p>
            </li>
            <li>
              <span>0</span>
              <p>代发货</p>
            </li>
            <li>
              <span>0</span>
              <p>代收货</p>
            </li>
            <li>
              <span>0</span>
              <p>代评价</p>
            </li>
          </ul>
        </Order>
        <More>
          <li>优惠券</li>
          <li>我的收藏</li>
          <li>收货地址</li>
          <li>售后服务</li>
          <li>我的积分</li>
        </More>

        <div>
          <ImagePicker
            onChange={this.onChange.bind(this)}
            onAddImageClick={this.addHead}
            selectable={true}
            style={{ width: "100%",height:"100%" ,position:"absolute",top:"0.7rem", left:'.2rem',opacity:'0'}}
          />
        </div>
      </div>
    );
  }
}

export default Personal;
