import styled from 'styled-components'

const Content = styled.div `
    height:0.5rem;
    width:100%;
    background:#000;
    display:flex;
    justify-content:space-between;
    item-align:center;
    
`
const Menu = styled.div `
    width:.5rem;
    height:.5rem;
    img{
        width:0.16rem;
        height:.13rem
    }
    display:flex;
    justify-content:center;
    align-items:center;
`

const Logo = styled.div `
    width: .43rem;
    height: .26rem;
    padding: .12rem 0;
    margin-left:0.2rem;
    img{
        width:100%;
        height:.26rem;
    }
`

const User = styled.div `
    width:.5rem;
    height:100%;
    margin-right:.15rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:relative;
    
    img{
        width: .19rem;
        height: .19rem;
    }
    
    &>img:nth-of-type(1){
        margin-right:0.1rem
    }
    sup{
        font-size: .12rem;
        color: #fff;
        width: .15rem;
        height: .15rem;
        line-height:.15rem;
        text-align: center;
        background-color: #f99302;
    }
`

export {
    Content,
    Menu,
    Logo,
    User
}