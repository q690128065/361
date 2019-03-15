import React, { Component } from "react";
import { ContentItem } from "./ContentItem";

class Content extends Component {
  constructor(props) {
    super(props)
    this.state={
      contentData:[]
    }
  }
  componentWillMount(){
    fetch("./data/homeData.json").then(res => {
      res.json().then(res => {
        this.setState({
          contentData:res
        }) 
      });
    });
  }
  render() {
    return <div>{this.state.contentData?this.state.contentData.map(item=>{
      return <ContentItem key={item.id}><img src={item.src} alt=""/><h2>{item.title}</h2></ContentItem>
    }):[]}</div>;
  }
}

export default Content;
