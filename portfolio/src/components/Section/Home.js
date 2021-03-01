import React from 'react';
import styled, { keyframes } from 'styled-components';
//import img from '../../assets/homeImg.jpg'



const Container = styled.div`
    position:relative;
    width:100%;
    height:calc(100vh - 2rem) ;
    color:white;
    @media(max-width: 994px){
        height: 85vh;  
    }
`;
const TitleContainer = styled.div`
    position:absolute;
    top:55%;
    left:50%;
    transform: translate( -50%, -50%);
    line-height:1.5;
     

`;
const Title = styled.h2`
    font-size: 4rem;
    font-weight:600;
    white-space:nowrap;
    @media(min-width:540px) and (max-width: 994px){
        font-size: 3rem;   
    }
    @media(max-width:540px){
        font-size: 2.2rem;
    }

`;


const typingAni = keyframes`
0%{width:0%}
100%{width: 850px}
`;


const cursor = keyframes`
0%{opacity:0;}
50%{opacity:1;}
100%{opacity:0;}
`;

const SubTitle = styled.h3`
    font-size: 3rem;
    font-weight:600;
    position:relative;
    display: inline-block;
    height: 80px;
    width:850px; 
    overflow: hidden;
    animation: ${typingAni} 4s steps(30, end) 1;

    &:after{
        position:absolute; 
        display:block;
        content:""; 
        width: 30px; 
        height: 50px;
        top : 15px;
        right:0; 
        border-right: 5px solid #fff;
        animation: ${cursor} 0.5s infinite;
    }

    @media(min-width:540px) and (max-width: 994px){
        font-size: 2rem;   
    }
    @media(max-width:540px){
        font-size: 1.3rem;
    }
    
`;




export default () => (
    <Container id="Home" >
        <TitleContainer>

            <SubTitle>Developer 황윤성의 포트폴리오 입니다</SubTitle>

        </TitleContainer>
    </Container>
)