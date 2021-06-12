import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import semtleggun from '../../../assets/semtleggun.png';
import { RiTeamFill } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const Container = styled.div`
    background-color: #fff;
   
`;

const ContentWrap = styled.div`
    padding: 80px 0;
    margin: 0 auto;
   
`;

const Title = styled.p`
    text-align:center;
    font-size: 3rem;
    font-weight: 600;
    color: #27ae60;
   
`;

const Content = styled.div`

    margin: 80px 0;
    display:flex;
    justify-content:center;
    @media (max-width: 1124px) {
        display:block;
        width:100%;
        padding:0px;
        margin:80px auto;
        width:50%;

    }
`;




const About = styled.div`
    padding:10px;
    margin-right:10%;
    @media (max-width: 1024px) {
        padding:0px;
        margin-right:0%;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        
}


`;

const Slick = styled.div`
    width: 480px;
    z-index:1;
    @media (max-width: 1024px) {
        margin:50px auto;
        padding:10px;
        width:80%;
    }
       
`;

// const CardContent = styled.div`
//     flex: 1;
//     padding: 60px 0 30px 30px;
//     background-color:#fff;
//     z-index:0;
//     line-height:2;
//     @media(max-width: 994px){
//         padding: 5px 20px 0 20px;
//         height: 200px; 
//         border-top:2px solid #2ecc71;
//     }
// `;

// const CardTitle = styled.h3`
//     font-size: 1.5rem;
//     font-weight:600;
//     border-bottom: 2px solid #2ecc71;
//     @media(max-width:540px){
//         font-size:1.3rem;
//     }
// `;

// const ContentTxt = styled.p`
//     font-size: 1.12rem;
//     font-weight:600;
//     color: #aaa;
//     @media(max-width:540px){
//         font-size:1rem;
//     }
// `;

// const ContentURL = styled.a`
//     font-size: 1rem;
//     font-weight:700;
//     transition: color .2s linear;
//     color:#a9a9a9;
//     &:hover{
//         color:#333;
//     }
//     &:before{
//         content: ${props => props.name};
//         color: #333;
//     }
//     &:after{
//         display:block;
//         content:""
//     }
// `;

const ImageContainer = styled.div`
    margin: 0 16px;
   
`;

const PrjImage = styled.img`
    width:100%;
 
`;

const PrjTitle = styled.p`
    font-size: 20px;
    font-weight:bold;
    
`
const IconTxt = styled.span`
    display:inline-block;
    font-weight:bold;
    padding:10px;
    
`


const IconContainer = styled.div`
    @media (max-width: 1024px) {
        text-align:left;
    }
`

const IconWrap = styled.div`
    margin-top:10px;
    
`

const PrjContent = styled.p`
    margin:40px 0;
    font-weight:bold;
`

const Skill = styled.span`
  font-weight:bold;
  background:  #27ae60;
  margin:10px;
  border-radius:50px;
  padding:10px;
  color:white;
`


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black " }}
            onClick={onClick}
        />
    );
}

//const imgUrl = require(semtleggun);
const ProjectPresenter = (props) => {
    const items = [
        { id: 1, url: semtleggun },
        { id: 2, url: semtleggun },
        { id: 3, url: semtleggun },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Container id="Project">
            <ContentWrap>
                <Title>Project</Title>
                <Content>
                    <About>
                        <PrjTitle>셈틀꾼 공식 홈페이지</PrjTitle>

                        <PrjContent>컴퓨터 공학과 학술 동아리 '셈틀꾼' 회원 전용 프로젝트  공고,게시,질문 사이트</PrjContent>
                        <IconContainer>
                            <IconWrap>
                                <RiTeamFill size="1.5rem" style={{ display: "inline-block", color: "#27ae60" }} /><IconTxt>15명(백앤드 담당)</IconTxt>
                            </IconWrap>
                            <IconWrap>
                                <BiCalendar size="1.5rem" style={{ display: "inline-block", color: "#27ae60" }} /><IconTxt>2020.07.04 ~ 2020.09.20</IconTxt>
                            </IconWrap>
                            <IconWrap>
                                <FaHashtag size="1.5rem" style={{ display: "inline-block", color: "#27ae60" }} /><IconTxt><Skill>Vue.js</Skill><Skill>Node.js</Skill><Skill>MongoDB</Skill>  </IconTxt>
                            </IconWrap>
                            <br></br>
                            <IconWrap>
                                <a href="http://sbmi.iptime.org/project/detail/5f6795042dd42431727251a3">
                                    <BiLinkExternal size="1.5rem" /><IconTxt>   </IconTxt>
                                </a>
                                <a href="https://github.com/HwangYoonSeong/semtle-back">
                                    <AiFillGithub size="1.5rem" /><IconTxt>   </IconTxt>

                                </a>
                            </IconWrap>
                        </IconContainer>

                    </About>

                    <Slick>
                        <Slider {...settings}
                        >
                            {items.map(item => {
                                return (
                                    <div key={item.id}>
                                        <ImageContainer>
                                            <PrjImage src={semtleggun} />
                                        </ImageContainer>
                                    </div>
                                );
                            })}
                        </Slider>

                    </Slick>




                </Content>

            </ContentWrap>
        </Container >
    )
}
export default ProjectPresenter;