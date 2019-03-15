import styled from "styled-components";

export const DetailItem = styled.div`
  background: white;
  flex: 1;
  width: 100%;

  img {
    width: 100%;
    margin: 0 auto;
  }
  .product {
    padding: 0.1rem;
    width: 100%;
    h2 {
      font-size: 0.18rem;
      font-weight: normal;
    }
    h3 {
      color: #1a1a1a;
      font-size: 0.14rem;
      display: inline-block;
      font-weight: normal;
      b {
        font-size: 0.18rem;
        color: #f99302;
        font-weight: normal;
      }
    }
    span {
      font-size: 0.12rem;
      color: #b2b2b2;
      margin-left: 1%;
    }
    p {
      font-size: 0.12rem;
      color: #a46701;
    }
  }
  .line {
    background: #f7f7f7;
    height: 0.1rem;
    width: 100%;
  }
`;

export const BuyBar = styled.div`
  width: 100%;
  display:flex;
  background:white;
  flex-wrap:nowrap;
  justity-content:center
  p{
      flex:1;
      height: .5rem;
      border-top: 1px solid #F99302;
      border-bottom: 1px solid #F99302;
      background-color: #F99302;
      color: #fff;
      line-height: .5rem;
      text-align: center;
      font-size: .15rem;
  }
  #buy{
    background-color: #fff;
    color: #F99302;
  }
`;
