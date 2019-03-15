import React, { Component } from "react";
import Header from "components/header/Header";

import { ListItem } from "components/listItem/ListItem";

import actionCreators from "store/list/actionCreators";
import storeConnect from "utils/storeConnect";
import { Link } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentWillMount() {
    this.props.getList();
  }

  render() {
    return (
      <div
        style={{
          background: "#fff",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Header />
        <div style={{ border: ".01rem solid #f0f0f0", position: "relative" }}>
          <ul style={{ display: "flex" }}>
            <li
              style={{
                padding: ".15rem 0 ",
                flex: 1,
                fontSize: ".15rem",
                color: "#F99302",
                textAlign: "center"
              }}
            >
              <span>综合排序</span>
            </li>
            <li
              style={{
                padding: ".15rem 0 ",
                flex: 1,
                fontSize: ".15rem",
                color: "#1a1a1a",
                textAlign: "center"
              }}
            >
              <span
                style={{
                  display: "block",
                  borderRight: ".01rem solid #eee",
                  borderLeft: ".01rem solid #eee"
                }}
              >
                销量优先
              </span>
            </li>
            <li
              style={{
                padding: ".15rem 0 ",
                flex: 1,
                fontSize: ".15rem",
                color: "#1a1a1a",
                textAlign: "center"
              }}
            >
              <span>筛选</span>
            </li>
          </ul>
        </div>
        <div
          style={{
            overflow: "scroll",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flex: 1
          }}
        >
          {this.props.list
            ? this.props.list.map(item => {
                return (
                  <ListItem key={item.id}>
                    <Link to={`/detail/${item.id}`} >
                      <img src={item.src} alt="" />
                      <h2>{item.title}</h2>
                      <p>￥ {item.price}.00</p>
                    </Link>
                  </ListItem>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}

export default storeConnect("list", List, actionCreators);
