import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../../assets/homeImg.jpg'
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


const Container = styled.div`
    position:relative;
    display: inline-block;
    width:100%;
    height:calc(100vh - 2rem) ;
    color:white;
    @media(max-width: 994px){
        height: 85vh;  
    }
`;

//width: width/scale=100/1.1=90.9
const Background = styled.div`
    position: absolute;
    width: 90.9%; 
    height: 1200px;
    background-attachment:fixed;
    background-image: url(${img});
    background-position: center center;
    background-size: cover;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    -webkit-transform: scale(1.1);
    -webkit-transform-origin:0.0;
    z-index:-1;
`;

// const TitleContainer = styled.div`

//     position:absolute;
//     top:55%;
//     left:65%;
//     transform: translate( -50%, -50%);
//     line-height:1.5;
//     width:100%;

// `;

const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    top:50%;
    line-height:1.5;
    width:100%;

`;

const cursor = keyframes`
    0%{border-right: 1px solid #fff} 
    50%{border-right: 1px solid #000} 
    100%{border-right: 1px solid #fff} 
`;

const SubTitle = styled.h3`
    display:none;
   
`;

const Typing = styled.p`
    font-size:4vw;
    display: inline-block; 
    animation-name: ${cursor}; 
    animation-duration: 1s; 
    animation-iteration-count: infinite; 
      
       
`;


const Home = () => {

    useEffect(() => {
        var typingBool = false;
        var typingIdx = 0;
        var typingTxt = window.$(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
        typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
        if (typingBool === false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;
            console.log(typingTxt.length);
            var tyInt = setInterval(typing, 100); // 반복동작 

        }

        function typing () {
            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                window.$(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++;
            } else {


                return () => { clearTimeout(tyInt) };
            }
        }

    }, []); //[] 인 경우 이 컴포넌트가 처음 랜더링 될 때만 실행



    return (
        <Container id="Home" >
            <Background />
            <TitleContainer>
                <SubTitle className="typing-txt"><b>Developer 황윤성의 포트폴리오 입니다.</b></SubTitle>
                <Typing className="typing"></Typing>
            </TitleContainer>
        </Container>
    )
}

export default Home;