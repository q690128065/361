import  styled  from "styled-components";

const ContentItem = styled.div`
  position: relative;
  margin-top: 15px;
  width:100%;
  position:relative
  img{
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
  h2{
    font-size: .15rem;
    color: #fff;
    height: .40rem;
    line-height: .40rem;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;


export {
    ContentItem
}
