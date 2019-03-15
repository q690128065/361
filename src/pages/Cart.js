import React, { Component } from "react";

import { Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { CartItem, SettleBar } from "components/cartItem/CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.Cart),
      counts: 0,
      prices: 0
    };

    this.activeNum = 0;
    this.counts = 0;
    this.prices = 0;
  }
  onSelect(item) {
    this.state.data.map((product, index) => {
      if (item.id === product.id) {
        this.state.data[index].active = !this.state.data[index].active;
        this.state.data[index].active
          ? (this.activeNum += 1)
          : (this.activeNum -= 1);
        if (this.state.data[index].active) {
          this.state.counts += item.count;
          this.state.prices += item.count * item.price;
        } else {
          this.state.counts -= item.count;
          this.state.prices -= item.count * item.price;
        }
      }
    });
    this.setState({
      data: this.state.data,
      counts: this.state.counts,
      prices: this.state.prices
    });

    /* 是否选择全部商品 */
    this.refs["all"].className =
      this.activeNum === this.state.data.length ? "active" : "";
  }

  onAll() {
    this.refs["all"].className =
      this.refs["all"].className === "active" ? "" : "active";
    this.state.data.map((item, index) => {
      /* 所有商品选择 */
      this.state.data[index].active =
        this.refs["all"].className === "active" ? true : false;


      if (this.refs["all"].className === "active") {
        this.state.counts += item.count;
        this.state.prices += item.count * item.price;
      } else {
        this.state.counts -= item.count;
        this.state.prices -= item.count * item.price;
      }
    });
    this.setState({
      data: this.state.data,
      counts: this.state.counts,
      prices: this.state.prices
    });
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#fff"
        }}
      >
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          style={{
            background: "black",
            height: ".5rem",
            lineHeight: ".5rem"
          }}
          rightContent={
            <span style={{ color: "#F99302", fontSize: ".15rem" }}>编辑</span>
          }
        >
          购物车（{this.state.data.length}）
        </NavBar>
        {/* 商品列表 */}
        <div style={{ flex: 1, overflow: "scroll" }}>
          {this.state.data.map(item => {
            return (
              <CartItem key={item.id}>
                <span
                  onClick={this.onSelect.bind(this, item)}
                  className={item.active ? "active" : "1"}
                />
                <Link to={`/detail/${item.id}`}>
                  <img src={item.src} alt="" />
                </Link>
                <div className="title">
                  <h2>{item.title}</h2>
                  <p>颜色：灰色/黑色 尺码：39.5</p>
                </div>
                <div className="price">
                  <p>￥ {item.price}.00</p>
                  <span>×{item.count}</span>
                </div>
              </CartItem>
            );
          })}
        </div>
        <SettleBar>
          <span ref="all" onClick={this.onAll.bind(this)}>
            全选
          </span>
          <p>
            合计：<b>￥{this.state.prices}</b>
          </p>
          <div>结算 ({this.state.counts})</div>
        </SettleBar>
      </div>
    );
  }
}

export default Cart;
