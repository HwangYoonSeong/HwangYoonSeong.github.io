import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.header`
    position:fixed;
    width:100%;
    padding: 0 100px;
    background-color: ${props => props.current ? "#fff" : "transparent"};
    transition: all .1s linear;
    z-index:2;
    
    color: ${props => props.current ? "rgb(20,20,20)" : "#fff"};
    @media (max-width: 994px){
        padding: 0px;
        color:rgb(20,20,20);
        background-color:  #fff;
        
       
        
    }
`;

const HeaderWrap = styled.nav`
    display: flex;
    position:relative;
    justify-content:space-between;
    height: 70px;
    
`;
const Button = styled.button`
    border:none;
    background:none;
    color:#27ae60;
    display: none;
    outline:none;
    margin-right: 30px;
    cursor:pointer;
    text-align:center;
    @media (max-width: 994px){
        display:block;
        z-index:2;
    }
`;
const Logo = styled.h1`
    padding-top: 15px;
    font-size: 40px;
    height: 100%;
    @media (max-width: 994px){
        margin-left: 30px;
        z-index:2;
    }
`;

const NavList = styled.ul`
    display:flex;
    font-size: 25px;
    font-weight:600;
    text-align:center;
    
    @media (max-width: 994px){
        display:block;
        position:absolute;
        width:100%;
        top:${props => props.current ? "100%" : "-400%"};
        left: 0;
        transition: top .3s ease-in;
        line-height:3;
         z-index:0;
    }
`;

const Item = styled.li`
    width:90px;
    height:100%;
    border-bottom: 3px solid ${props => props.current ? "#27ae60" : "transparent"};
    transition: border-bottom .2s ease-in;
    
    &:hover{
        color: #27ae60;
    }
    margin-right: 60px;
    @media (max-width: 994px){
        color:#27ae60;
        display:block;
        width: 100%;
        border-bottom: none;
        background-color: #fff;
        text-align:center;
        &:hover{
            color:#fff;
            background-color: #27ae60;
        }
        
        
    }
`;

const Link = styled.a`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;
`;
//NavList 가리기 용
const MobCover = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-color:  #fff; 
    display:none;
    z-index:1;
    @media (max-width: 994px){
        display:block;
    }
`;
const HeaderPresenter = (props) => {
    return (
        <Header current={props.pos > 0}>
            <HeaderWrap>
                <Logo>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>Yoon</span>castle
            </Logo>
                <MobCover />
                <Button onClick={props.toggleBtn}>{props.isClickList ? <FontAwesomeIcon icon="times" size="2x" /> : <FontAwesomeIcon icon="bars" size="2x" />} </Button>
                <NavList current={props.isClickList}>
                    <Item current={props.pos >= props.home.top && props.pos <= props.home.bottom}>
                        <Link href="#Home">Home</Link>
                    </Item>
                    <Item current={props.pos >= props.about.top && props.pos <= props.about.bottom}>
                        <Link href="#About">About</Link>
                    </Item>
                    <Item current={props.pos >= props.skill.top && props.pos <= props.skill.bottom}>
                        <Link href="#Skill">Skill</Link>
                    </Item>
                    <Item current={props.pos >= props.project.top && props.pos <= props.project.bottom}>
                        <Link href="#Project">Project</Link>
                    </Item>
                </NavList>
            </HeaderWrap>
        </Header>
    )

}
export default HeaderPresenter;