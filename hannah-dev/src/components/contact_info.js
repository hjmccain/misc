import React from 'react';
import keepInTouch from '../../public/keep-in-touch.png';
import banana from '../../public/naner.png';

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <img className="keep-in-touch" src={keepInTouch} alt="Thanks for stopping by. Keep in touch!" />
      <div className="contact-info-container">
        <br />
        <br />
        <br />
        <p className="contact" id="contact">
          email <a href="mailto:hannahjmccain@gmail.com" className="contact-link">
            hannahjmccain@gmail.com
          </a>
        </p>
        <p className="contact">
          github <a href="https://github.com/hjmccain" className="contact-link" target="_blank">
            hjmccain
          </a>
        </p>
        <p className="contact">
          twitter <a href="https://twitter.com/hjmccain" className="contact-link" target="_blank">
            @hjmccain
          </a>
        </p>
      </div>
      <img className="banana" src={banana} alt="banana" />
    </div>
  )
}

export default ContactInfo;
