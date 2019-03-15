import styled from "styled-components";
import order from "images/order.png";

export const Order = styled.div`
  background-color: #fff;
  margin: 0.1rem 0;
  .order-head {
    padding: 0.15rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    item-align: center;
    h2 {
      display: inline-block;
      font-size: 0.15rem;
      color: #1a1a1a;
      background: url(${order}) no-repeat 0 0.02rem;
      background-size: 0.14rem 0.15rem;
      padding-left: 0.2rem;
      font-weight: normal;
    }
    span {
      color: #b2b2b2;
      font-size: 0.15rem;
    }
  }
  ul {
    border-top: 0.01rem solid #f0f0f0;
    border-bottom: 0.01rem solid #f0f0f0;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      font-size: 0.12rem;
      color: #1a1a1a;
      padding: 0.13rem 0;
      border-left: 0.01rem solid #f0f0f0;
      &:nth-of-type(1) {
        border: none;
      }
      p {
        margin-top: 0.04rem;
        color: #1a1a1a;
      }
    }
  }
`;

export const More = styled.ul`
  background: #fff;
  margin: 0.1rem 0;
  li {
    font-size: 0.15rem;
    color: #1a1a1a;
    padding: 0.15rem;
    border-bottom: 0.01rem solid #f0f0f0;
  }
`;
