import styled from "styled-components";
import choose from "images/choose.png";
import unchoose from "images/unchoose.png";

const Input = styled.input`
  width: 100%;
  height: 0.42rem;
  padding: 0 4.8%;
  margin: 0.05rem 0;
  border: 0.01rem solid #cccccc;
  border-radius: 0.04rem;
  font-size: 0.15rem;
  &::-webkit-input-placeholder {
    color: #aaa;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 15px;
  background-color: #f99302;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const Radio = styled.div`
  cursor: pointer;
  background: url(${props => (props.checked ? choose : unchoose)}) no-repeat;
  background-size: 100%;
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  margin-right: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
`;

const Search = styled.div`
  width: 2rem;
  height: 0.35rem;
  margin: 0 auto;
  border: 0.01rem solid #fff;
  border-radius: 0.5rem;
  position:relative;
  input{
    background-color: transparent;
    border:none;
    height: .32rem;
    width: 1.25rem;
    padding-left: .18rem;
    font-size: .15rem;
    color: #808080;
  }
  img{
    width:.15rem;
    height:.15rem;
    position:absolute;
    right:.1rem;
    top:.1rem;
  }
`;

export { Input, Button, Radio, Search };
