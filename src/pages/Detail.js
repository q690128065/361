import React, { Component } from "react";

import actionCreators from "store/list/actionCreators";
import storeConnect from "utils/storeConnect";

import { Link } from "react-router-dom";

import { NavBar, Icon,Toast } from "antd-mobile";

import { DetailItem, BuyBar } from "components/detailItem/DetailItem";

import cart from "images/cart.png";

class Detail extends Component {
  componentWillMount() {
    if (!this.props.list.length) {
      this.props.history.push("/list");
    }
  }

  /* 加入购物车事件 */
  add(data) {
    if (localStorage.Cart) {
      let cartList = JSON.parse(localStorage.Cart); //JSON数据转换数组对象
      cartList.forEach(item => {
        //forEach遍历数据
        if (item.id === data.id) {
          //如果存在id相同的对象，让count+1
          item.count += 1;
        }
      });
      cartList = cartList.every(item => item.id !== data.id)
        ? [...cartList, { ...data, count: 1 }]      //结构赋值，添加对象进数组
        : cartList;
      localStorage.Cart = JSON.stringify(cartList); //localStorage存储数据
    } else {
      //如果是第一天数据，直接添加count，并存储
      let product = {
        ...data,
        count: 1,
        active:false
      };
      localStorage.Cart = JSON.stringify([product]);
    }
    
    Toast.success('加入购物车成功', 1);
  }

  render() {
    let data =
      this.props.list.length > 0
        ? this.props.list.find(
            item => item.id === Number(this.props.match.params.id)
          )
        : null;
    if (data) {
      return (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column"
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
            rightContent={[
              <Link to="/cart" key={data.id}>
                <img
                  src={cart}
                  style={{ display: "block", width: ".2rem", height: ".2rem" }}
                />
              </Link>
            ]}
          >
            商品详情
          </NavBar>
          <DetailItem>
            <img src={data.src} alt="" />
            <div className="product">
              <h2>{data.title}</h2>
              <h3>
                RMB：<b>{data.price}</b>
              </h3>
              <span>吊牌价：￥999</span>
              <p>运费: 不包邮</p>
            </div>
            <div className="line" />
          </DetailItem>
          <BuyBar>
            <p id="buy">立即购买</p>
            <p id="add" onClick={this.add.bind(this, data)}>
              加入购物车
            </p>
          </BuyBar>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default storeConnect("list", Detail, actionCreators);
