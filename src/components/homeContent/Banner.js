import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";

class Banner extends Component {
    constructor(props){
        super(props)
        this.state={
            bannerList:[{
              "id": 1,
              "src": "http://361cdn.361sport.com/tel/images/home/banner20181226.jpg"
          }, {
              "id": 2,
              "src": "http://361cdn.361sport.com/tel/images/home/banner280715.jpg"
          }, {
              "id": 3,
              "src": "http://361cdn.361sport.com/tel/subject/20180814/img/home/banner.jpg"
          }, {
              "id": 4,
              "src": "http://361cdn.361sport.com/tel/images/home/banner180717.jpg"
          }]
        }
    }
    renderItem(){
      return this.state.bannerList.map(item=>{
        return <img src={item.src} alt="" key={item.id} style={{height:'100%'}}/>
      })
    }
    render() {
    return (
        <WingBlank style={{ width: "100%", margin: 0 , height:'4.8rem'}}>
          <Carousel
            infinite={true}
            autoplay={true}
            style={{ width: "100%",height:'100%' }}
            dotActiveStyle={{ background: "#fff" }}
          >{this.renderItem()}
          </Carousel>
        </WingBlank>
    );
  }
}

export default Banner;
