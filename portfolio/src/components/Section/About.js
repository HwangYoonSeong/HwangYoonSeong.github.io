import React from 'react';
import styled from 'styled-components';
import PROFILE from '../../assets/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Container = styled.article`
    background-color: #fff;
`;

const ContentWrap = styled.div`
    padding: 80px 0;
    margin: 60px auto;
   
`;


const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: #27ae60;
    text-align:center;
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
    width: 280px;
    height:280px;
    object-fit:cover;    
    border-radius:50%;.
    object-position:top;
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
            <ContentWrap><Title>About</Title>
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
                        <div> <p style={{ fontSize: "25px", fontWeight: "bold" }}>차분하게 치열하게 겸손하게</p> <br />
                            어떤 일이든 동요하지 않고 차분하게<br />
                            안주하지 않고 누구보다 치열하게<br />
                            항상 배울 수 있도록 낮은 자세로 겸손하게<br />
                            일할 수 있는 개발자가 되기 위해 노력하고 있습니다. <br /><br />
                            저에 대해 궁금하신 점이 있다면, 위의 주소로 연락주세요!!!
                        </div>
                    </MyIntro>
                </Content></ContentWrap>

        </Container>
    )
}
export default About;