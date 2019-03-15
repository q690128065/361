import React, { Component } from "react";
import Header from "components/header/Header";
import HomeContent from "components/homeContent/HomeContent";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          height: "100vh"
        }}
      >
        <Header />

        <HomeContent />
      </div>
    );
  }
}
export default Home;
