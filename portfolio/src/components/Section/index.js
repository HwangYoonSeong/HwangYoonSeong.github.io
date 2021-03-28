import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Projects';


const Container = styled.section`
    width: 100%;
    @media(max-width: 994px){
        padding-top: 60px;
    }

`;
const container = () => {
    return (
        <Container>
            <Home />
            <About />
            <Skill />
            <Project />
        </Container>
    )
}
export default container;