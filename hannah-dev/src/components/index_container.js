import React from 'react';
import '../style/sass/index.scss';
import Header from './header';
import Portfolio from './portfolio';
import About from './about';
import ContactInfo from './contact_info';
import moreButton from '../../public/more-button-3.png';

const IndexContainer = () => {
  return (
    <div className="redirect">
      <h1>
        Hi there! This site has moved to <a href="http://hannahmcca.in">HANNAHMCCA.IN</a> - see you there!
      </h1>
    </div>
  )
}

export default IndexContainer;

{/*
  (
    <div className="container">
      <Header />
      <a href="#about"><img className="more-button" src={moreButton} alt="button to see more content" /></a>
      <div className="content">
        <About />
        <Portfolio />
        <ContactInfo />
      </div>
    </div>
  )
*/}
