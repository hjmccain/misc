import React from 'react';
import PortfolioText from './portfolio_text';
import PortfolioItem from './portfolio_item';
import projectsShape from '../../public/projects-cut-off.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title-div" id="portfolio">
        <img className="projects-shape" src={projectsShape} alt="blue shape" />
      </div>
      <div className="portfolio-item-container">
        <PortfolioItem
          titleContent={PortfolioText.three.header}
          description={PortfolioText.three.description}
          titleImg={PortfolioText.three.titleImg}
          img={PortfolioText.three.img}
          stack={PortfolioText.three.stack}
          role={PortfolioText.three.role}
          demoLink={PortfolioText.three.demo}
          codeLink={PortfolioText.three.code} />
        <PortfolioItem
          titleContent={PortfolioText.one.header}
          description={PortfolioText.one.description}
          titleImg={PortfolioText.one.titleImg}
          img={PortfolioText.one.img}
          stack={PortfolioText.one.stack}
          role={PortfolioText.one.role}
          demoLink={PortfolioText.one.demo}
          codeLink={PortfolioText.one.code} />
        <PortfolioItem
          titleContent={PortfolioText.two.header}
          description={PortfolioText.two.description}
          titleImg={PortfolioText.two.titleImg}
          img={PortfolioText.two.img}
          stack={PortfolioText.two.stack}
          role={PortfolioText.two.role}
          demoLink={PortfolioText.two.demo}
          codeLink={PortfolioText.two.code} />
      </div>
      <div className="space-div"></div>
    </div>
  )
}

export default Portfolio;
