import React, { Component } from "react";
import Banner from "./Banner";
import Content from "./Content";

class HomeContent extends Component {
  constructor() {
    super();
    this.state = {
      contentData: []
    };
  }
  componentWillMount() {
    fetch("./data/homeData.json").then(res => {
      res.json().then(res => {
        this.contentData = res;
      });
    });
  }
  render() {
    return (
      <div
        style={{
          flex: 1,
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <Banner />
        <Content contentData={this.contentData} />
      </div>
    );
  }
}

export default HomeContent;
