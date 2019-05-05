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
      prices: 0,
      checkStateList: []
    };

    this.activeNum = 0;
    this.counts = 0;
    this.prices = 0;
    this.checkList = []
  }
  onSelect(item) {
    if (this.checkList.indexOf(item.id) !== -1) {
      console.log(this.checkList.indexOf(item.id))
      this.checkList.splice(this.checkList.indexOf(item.id), 1);
    } else {
      this.checkList.push(item.id);
    }
    /* 总数，总价计算 */
    this.prices = 0;
    this.counts = 0;
    this.state.data.forEach(v => {
      this.checkList.forEach(cv => {
        if (cv === v.id) {
          this.prices += v.count * v.price;
          this.counts += v.count;
        }
      })
    });
    this.setState({
      checkStateList: this.checkList,
      prices: this.prices,
      counts: this.counts
    })
  }

  onAll() {
    
  }

  render() {
    const { checkStateList } = this.state;
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
                  className={checkStateList.indexOf(item.id) !== -1 ? "active" : ""}
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
