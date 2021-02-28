import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faPhone, faBirthdayCake, faEnvelope, faStar, faBars, faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
//import img from './assets/homeImg.jpg'

library.add(faPhone, faBirthdayCake, faEnvelope, faStar, faBars, faTimes, faArrowLeft, faArrowRight)

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment:fixed;
  background-image:url("https://www.wallpapertip.com/wmimgs/83-838348_huge-lines-of-code.jpg");
  background-size: cover;
`;

class App extends Component {
  render () {
    return (
      <div className="App">
        <Container>
          <Header />
          <Section />
          <Footer />
          <GlobalStyles />
        </Container>


      </div>
    );
  }
}

export default App;