import React from 'react';
import styled from 'styled-components';
import PROFILE from '../../assets/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Container = styled.article`
    width: 100%;
    margin: 30px auto;
    padding: 80px 0 ;
    background-color:white;
    z-index:1;
    @media (max-width: 1219px) {
         
        width: 100%;
    }
    @media(max-width: 994px){
        margin-top: 50px;
    }
`;

const Title = styled.h2`
    margin-left:200px;
    font-size: 3rem;
    font-weight: 600;
    color: #27ae60;
    @media(max-width: 994px){
        margin-left:0px;
        text-align:center;
    }
`;
const Content = styled.div`
    margin: 80px 0 ;
    text-align:center;
`;

const Profile = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width: 994px){
        display:block;
    }
`;

const ProfileText = styled.div`
    margin-left: 100px;
    text-align: left;
    @media(max-width: 994px){
        margin: 0;
        padding-top: 15px;
        text-align:center;
    }
`;

const ProfileImg = styled.img`
    width: 180px;
    border:5px solid #3498db;
    border-radius:50%;
`;

const ProfileTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
`;

const ProfileSubtitle = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    line-height:2;
`;

const ProfileDetail = styled.ul`
    margin-top: 10px;
    font-size: .8rem;
    font-weight:700;
    @media(min-width:540px) and (max-width: 994px){
        text-align:left;
        padding-left: 100px;  
    }
    @media(max-width:540px){
        text-align:left;
        padding: 15px 0 0 10px;
    }

`;

const ProfileItem = styled.li`
    display:flex;
    &:not(:first-child){
        margin-top: 10px;
    }
`;

const ItemTitle = styled.h4`
    font-size: 1.2rem;
    color: #333;
`;
const ItemIcon = styled.span`
    display:block;
    width: 60px;
    height:60px;
    line-height:55px;
`;
const Itemtxt = styled.div`
    color: #aaa;
    line-height:1.4;
    font-size: 1rem;
    @media(max-width:540px){
        font-size: .9rem;
    }
`;

const ItemLink = styled.a`
    transition: color .2s ease-in-out;
    &:hover{
        color: #333;
    }
`;

const MyIntro = styled.div`
    margin-top: 50px;
    font-size:1.25rem;
    padding: 0 30px;
    line-height: 1.75;
    @media(max-width:540px){
        font-size: 1.1rem;
    }
`;
const About = () => {
    return (
        <Container id="About">
            <Title>About</Title>
            <Content>
                <Profile>
                    <ProfileImg src={PROFILE} alt="프로필 사진"></ProfileImg>
                    <ProfileText>
                        <ProfileTitle>황윤성</ProfileTitle>
                        <ProfileSubtitle>Front-End Developer</ProfileSubtitle>
                        <ProfileDetail>
                            <ProfileItem>
                                <ItemIcon>
                                    <FontAwesomeIcon icon="birthday-cake" size="2x" />
                                </ItemIcon>
                                <Itemtxt>
                                    <ItemTitle>Birthday : </ItemTitle>
                                April 4, 1997
                            </Itemtxt>
                            </ProfileItem>
                            <ProfileItem>
                                <ItemIcon>
                                    <FontAwesomeIcon icon="phone" size="2x" />
                                </ItemIcon>
                                <Itemtxt>
                                    <ItemTitle>Phone : </ItemTitle>
                                +82 010 2222 3333
                            </Itemtxt>
                            </ProfileItem>
                            <ProfileItem>
                                <ItemIcon>
                                    <FontAwesomeIcon icon="envelope" size="2x" />
                                </ItemIcon>
                                <Itemtxt>
                                    <ItemTitle>EMail : </ItemTitle>
                                    <ItemLink href="mailto:dbstjd427@naver.com">dbstjd427@naver.com</ItemLink>
                                </Itemtxt>
                            </ProfileItem>
                            <ProfileItem>
                                <ItemIcon>
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </ItemIcon>
                                <Itemtxt>
                                    <ItemTitle>Github : </ItemTitle>
                                    <ItemLink href="https://github.com/HwangYoonSeong">
                                        https://github.com/HwangYoonSeong
                            </ItemLink>

                                </Itemtxt>
                            </ProfileItem>
                        </ProfileDetail>
                    </ProfileText>
                </Profile>
                <MyIntro>
                    <div> <h2>The devil is in the detail</h2> <br />
                    그럴싸해 보이는 웹사이트가 아닌 완벽함을 추구합니다.<br />
                    작은 요소 하나하나까지 기꺼이 시간과 노력을 쏟아 부울수 있는<br />
                        열정적인 개발자입니다.
                        </div>
                </MyIntro>
            </Content>
        </Container>
    )
}
export default About;