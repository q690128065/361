import styled from "styled-components";
import choose from "images/choose.png";
import unchoose from "images/unchoose.png";
export const CartItem = styled.div`
  border-bottom: 0.01rem solid #f0f0f0;
  padding: 0.15rem 0;
  display: flex;
  align-items: center;
  & > span {
    width: 0.16rem;
    height: 0.16rem;
    background: url(${unchoose}) no-repeat;
    background-size: 100%;
    margin: 0.22rem 0.1rem;
  }
  img {
    width: 0.58rem;
    height: 0.58rem;
    border: 0.01rem solid #f0f0f0;
    display: inline-block;
  }
  .title {
    margin-left: 0.1rem;
    h2 {
      width: 100%;
      font-size: 0.15rem;
      color: #1a1a1a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }
    p {
      font-size: 0.12rem;
      color: #f99302;
      margin-top: 0.03rem;
    }
  }
  .price {
    line-height: 0.17rem;
    font-size: 0.16rem;
    flex: 1;
    margin-right: 0.1rem;
    p {
      text-align: right;
    }
    span {
      display: block;
      font-size: 0.12rem;
      color: #808080;
      margin-top: 0.03rem;
      text-align: right;
    }
  }
  .active{
    background: url(${choose}) no-repeat;
    background-size: 100%;
  }
`;

export const SettleBar = styled.div`
  width: 100%;
  border-top: 0.01rem solid #f0f0f0;
  line-height: 0.45rem;
  height:.45rem;
  box-sizing:content-box;
  display: flex;
  & > span {
    padding: 0.02rem;
    padding-left: 0.22rem;
    margin: 0 0.1rem;
    color: #1a1a1a;
    background: url(${unchoose}) no-repeat;
    background-size: 0.16rem;
    background-position-y: center;
  }
  &>p{
    flex:1;
    font-size: .15rem;
    color: #1a1a1a;
    text-align:right;
    b{
      color: #F99302;
      font-weight:normal;
    }
  }
  &>div{
    width: 1.40rem;
    margin-left: .15rem;
    height: 100%;
    background-color: #F99302;
    font-size: .15rem;
    color: #fff;
    text-align:center;
    box-sizing:border-box;
  }
  .active{
    background: url(${choose}) no-repeat;
    background-size: 0.16rem;
    background-position-y: center;
  }
`;
