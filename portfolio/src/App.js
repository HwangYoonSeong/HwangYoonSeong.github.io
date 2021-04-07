import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faPhone, faBirthdayCake, faEnvelope, faStar, faBars, faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
//import img from './assets/homeImg.jpg'

library.add(faPhone, faBirthdayCake, faEnvelope, faStar, faBars, faTimes, faArrowLeft, faArrowRight)

function App () {

  return (
    <div className="App">

      <Header />
      <Section />
      <Footer />
      <GlobalStyles />


    </div>
  );
}


export default App;