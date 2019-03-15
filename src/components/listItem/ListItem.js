import styled from "styled-components";

export const ListItem = styled.div`
  display: block;
  padding: 2%;
  margin: 2%;
  border: 0.01rem solid #f0f0f0;
  border-radius: 0.04rem;
  text-align: center;
  width:41% ;
  box-sizing:content-box;
  img {
    display: block;
    width: 100%;
  }
  h2 {
    font-size: 0.15rem;
    color: #1a1a1a;
    padding: 0.05rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p{
    font-size: .15rem;
    color: #F99302;
  }
`
