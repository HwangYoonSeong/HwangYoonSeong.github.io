import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.article`
    background-color: #ecf0f1;
`;

const ContentWrap = styled.div`
    padding: 80px 0;
    margin: 0 auto;
   
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: #27ae60;
    text-align:center;
`;

const Content = styled.div`
    margin: 80px 0;
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

const SkillList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 200px);
    grid-gap: 20px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 200px);
    }
    @media(max-width: 743px) {
        grid-gap: 0px;
        grid-template-columns: repeat(2, 180px);
     }
    
`;


const SkillCard = styled.li`
    position:relative;
    padding-top:20px;
    text-align:center;
    @media(max-width:  1024px) {
       height:200px;
    }
`;
const CardImg = styled.img`
    width: 80px;
    height:80px;
`;

const CardTitle = styled.h4`
    margin-top:5px;
    font-size:1.12rem;
    font-weight:600;
`;

const SkillPresnter = (props) => {
    return (
        <Container id="Skill">
            <ContentWrap>
                <Title>Skill</Title>
                <Content>
                    <SkillList>
                        {props.skills.map((skill, idx) => (
                            <SkillCard key={idx} current={props.slideCounter === idx}>
                                <CardImg src={skill.img} alt={skill.skill} />
                                <CardTitle>{skill.skill}</CardTitle>
                            </SkillCard>)
                        )}
                    </SkillList>

                </Content>
            </ContentWrap>
        </Container>
    )
}
export default SkillPresnter;