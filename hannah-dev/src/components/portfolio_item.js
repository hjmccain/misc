import React from 'react';
import viewCode from '../../public/view-code.png';
import viewApp from '../../public/view-app.png';

const PortfolioItem = (props) => {
  return (
      <div className="portfolio-item">
        <img className={props.titleImg.className} src={props.titleImg.src} alt={props.titleImg.alt} />
        <a href={props.codeLink.url} target="_blank"><img className="view-code" src={viewCode} alt="button to view code" /></a>
        <a href={props.demoLink.url} target="_blank"><img className="view-app" src={viewApp} alt="button to view app" /></a>
        <div className="center-image"><img className={props.img.className} src={props.img.src} alt={props.img.alt} />
          <p className="portfolio-element">
            <span className="highlighted-title">
              {props.titleContent.subtitle}</span> —
            <br />
            {props.description}
          </p>
        <p className="portfolio-element" >
          <span className="highlighted-title">The stack</span> —
            <br />
          {props.titleContent.title} was built with <span className="highlighted-font">React + Redux</span> on the front end, <span className="highlighted-font"> Node.js + Express</span>  on the back end, and a <span className="highlighted-font">{props.stack.db}</span> database.
        </p>
        <p className="portfolio-element last-element">
          <span className="highlighted-title">My role</span> —
            <br />
            {props.role}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem;
