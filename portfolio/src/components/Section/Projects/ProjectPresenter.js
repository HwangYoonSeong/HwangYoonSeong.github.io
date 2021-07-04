import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

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

    margin: 80px 80px 150px 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:2px solid #27ae60;
    @media (max-width: 1124px) {
        display:block;
        padding:0px;
        margin:80px auto;
        width:70%;
        border-bottom:2px solid #27ae60;
        

    }
`;




const About = styled.div`
    width:50%;
    margin-left:7%;
    margin-bottom:80px;
    @media (max-width: 1024px) {
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:0 auto;
        margin-bottom:100px;
}
`;

const Slick = styled.div`
    width: 50%;
    z-index:1;
    margin-bottom:80px;
    @media (max-width: 1024px) {
        margin:50px auto;
        padding:10px;
        width:100%;
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

//const imgUrl = require(semtleggun);
const ProjectPresenter = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Container id="Project">
            <ContentWrap>
                <Title>Project</Title>

                {props.projects.map((prj, idx) => {
                    return (
                        <Content key={idx}>

                            <Slick>
                                <Slider {...settings}
                                >
                                    {prj.img.map((img, idx) => {
                                        return (
                                            <div key={idx}>
                                                <ImageContainer>
                                                    <PrjImage src={img} />
                                                </ImageContainer>
                                            </div>
                                        );
                                    })}
                                </Slider>

                            </Slick>

                            <About>
                                <PrjTitle>{prj.title}</PrjTitle>

                                <PrjContent>{prj.txt}</PrjContent>
                                <IconContainer>
                                    <IconWrap>
                                        <RiTeamFill size="1.5rem" style={{ display: "inline-block", color: "#27ae60" }} /><IconTxt>{prj.developers}</IconTxt>
                                    </IconWrap>
                                    <IconWrap>
                                        <BiCalendar size="1.5rem" style={{ display: "inline-block", color: "#27ae60" }} /><IconTxt>{prj.period}</IconTxt>
                                    </IconWrap>
                                    <IconWrap>
                                        <FaHashtag size="1.5rem" style={{ display: "inline-block", color: "#27ae60" }} />
                                        <IconTxt>
                                            {prj.skills.map((skill, idx) => {
                                                return (
                                                    <Skill key={idx}>{skill}</Skill>
                                                );
                                            })}

                                        </IconTxt>
                                    </IconWrap>
                                    <br></br>
                                    <IconWrap>
                                        {prj.url ? (<a href={prj.url}>
                                            <BiLinkExternal size="1.5rem" /><IconTxt>   </IconTxt>
                                        </a>) : null}

                                        <a href={prj.git}>
                                            <AiFillGithub size="1.5rem" /><IconTxt>   </IconTxt>

                                        </a>
                                    </IconWrap>
                                </IconContainer>

                            </About>



                        </Content>
                    );
                })}



            </ContentWrap>
        </Container >
    )
}
export default ProjectPresenter;