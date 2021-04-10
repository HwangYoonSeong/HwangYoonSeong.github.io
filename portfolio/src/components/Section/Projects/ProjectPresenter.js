import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import semtleggun from '../../../assets/semtleggun.png';
const Container = styled.div`
    background-color: #fff;
   
`;

const ContentWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
    margin: 0 auto;
    @media (max-width: 1219px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: #27ae60;
    @media(max-width: 994px){
        text-align:center;
    }
`;

const Content = styled.div`
    padding: 80px 0;
    display:flex;
    justify-content:center;
`;
const About = styled.div`
    margin: 0 80px 0 20px ;
   
`;

const CardImg = styled.img`
    height:100%;
    transition: transform .3s linear;
    @media(max-width: 994px) {
        height:auto;
        width:100%;
    }
`;

// const Card = styled.div`
//     display:flex;
//     margin: 0 auto;
//     width: 930px;
//     height:300px;
//     border-left: 8px solid #2ecc71;
//     border-right: 8px solid #2ecc71;
//     border-radius:5px;
//     transition: box-shadow .2s ease-in-out;
//     z-index:1;
//     overflow: hidden;
//     &:not(:last-child){
//         margin-bottom: 30px;
//     }
//     &:hover{
//         box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
//     }
//     &:hover ${CardImg}{
//         transform:scale(1.1)
//     }
//     @media(max-width: 994px) {
//         display:block;
//         width:90%;
//         height:100%;
//         border:none;
//         border-bottom: 4px solid #2ecc71;
//         border-top: 4px solid #2ecc71;
//         &:hover ${CardImg}{
//             transform: none;
//         } 
//     }
// `;

const Slick = styled.div`
    display:block;
    margin: 0 auto;
    width: 200px;
    height:100%;
    z-index:1;
     
       
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

const Image = styled.img`
width:100px;
height:100px;
`;


const ProjectImg = styled.div`
     width:100px;
     height:100px;
     background-color:#aff;
`;

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
        autoplaySpeed: 3000,
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
                        <h1>셈틀꾼 공식 홈페이지</h1>
                        <br></br>
                        <p>컴퓨터 공학과 학술 동아리 '셈틀꾼' 회원 전용 프로젝트  공고,게시,질문 사이트. 백앤드 담당</p>
                    </About>
                    <div>
                        <Slick>

                            <Slider {...settings}
                            >
                                {items.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <ImageContainer>
                                                <Image src={semtleggun} />
                                            </ImageContainer>
                                        </div>
                                    );
                                })}
                            </Slider>

                        </Slick>
                    </div>






                </Content>





            </ContentWrap>
        </Container >
    )
}
export default ProjectPresenter;