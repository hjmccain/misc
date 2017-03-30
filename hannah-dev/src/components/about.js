import React from 'react';
import NavBar from './nav_bar';

const About = () => {
  return (
    <div className="about-container" id="about" >
      <div className="fixed-nav"><NavBar/></div>
      <div className="bio-background">
        <p className="bio-text">
          I'm a full-stack web developer hailing from <a href="http://www.huffingtonpost.com/findery/the-other-portland_b_5325702.html" className="bio-link" target="_blank">the 'other' Portland</a> (Maine!) who loves languages — human and computer alike.
          <br />
          <br />
          Other things I love: <a href="http://www.newenglandwaterfalls.com/" className="bio-link" target="_blank">hiking the waterfalls of New England</a>, taking notes in the margins of a book, and <a href="http://www.sunset.com/food-wine/fast-fresh/new-essentials-sonoran-hot-dog" className="bio-link" target="_blank">Sonoran hot dogs</a>.
          <br />
          <br />
          I see coding as the creative process of communicating with a user. I approach my code from the outside in, thinking about who will be interacting with my app, and why.
          <br />
          <br />
          <span className="larger-font">
            From there, I just code the conversation. <a className="bio-link" id="mailto" href="mailto:hannahjmccain@gmail.com"> So — let's talk.</a>
          </span></p>
      </div>
    </div>
  )
}

export default About;
