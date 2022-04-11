
import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import PortfolioItem from './PortolioItem';
import TableauViz from './TableauViz';


export type ProjectCardContent = {
  title: string,
  description: String,
  skillImgPath: string,
  url: string,
  technologies: string,
  id: number,
}

const f1: ProjectCardContent = {
  title: 'F1 historical overview - Data vizualiazation workbooks',
  description: 'A conjunction of seven data vizualization dashbords intended to answear several research questions regarding historical formula 1 data.',
  skillImgPath: ''/*require('../../assets/ml.png')*/,
  technologies: 'Tableau, Phyton.',
  url: '',
  id: 0
};


const javaDev: ProjectCardContent = {
  title: 'LlemePlay - Angular project',
  description: 'Web application of a service which facilitates the lending and exchange of hard copy videogames between users.',
  skillImgPath: ''/*require('../../assets/ml.png')*/,
  url: 'https://trusting-roentgen-21fcd7.netlify.app/',
  technologies: 'Angular, Typescript.',
  id: 1,
};

const dataViz: ProjectCardContent = {
  title: 'Grant approval platfor - Spring + React project',
  description: 'Grant management system to facilitate the application and attribution of grants to researchers. Frond end developed with react and backend built using the Spring framwork in kotlin.',
  skillImgPath: require('../../assets/viz.png'),
  url: '',
  technologies: 'React, Kotlin, Spring.',
  id: 2,
};


const webDevelopment: ProjectCardContent = {
  title: 'Web development',
  description: 'Familiar with Javascript and Typescript frameworks such as Angular and React to build scalable web applications. Used during my internship and in other academic projects. ',
  skillImgPath: require('../../assets/webDev.png'),
  url: '',
  technologies: 'React, Kotlin, Spring.',
  id: 3,
};


const git: ProjectCardContent = {
  title: 'Git workflow',
  description: 'Experienced with the git workflow. Mostly used Github but also have some experience with Bitbucket.',
  skillImgPath: require('../../assets/Git.png'),
  url: '',
  technologies: 'React, Kotlin, Spring.',
  id: 4
};


const cloud: ProjectCardContent = {
  title: 'Cloud services',
  description: 'Have deployed web applications using Azure combining multiple services.',
  skillImgPath: require('../../assets/azure.png'),
  url: '',
  technologies: 'React, Kotlin, Spring.',
  id: 5
};


function Portfolio() {

  let selectedItem = ''

  const [selectedViz, setSelectedViz] = useState(selectedItem as string)


  const handleItemSelect = (item: string) => {
    setSelectedViz(item)  }


  return (
    <div id='skills' className="container skills__container">
      <h2 id='sec-title'>Portfolio</h2>

      <div className='skillItem-container'>
        <PortfolioItem content={f1} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={javaDev} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={dataViz} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={webDevelopment} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={git} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={cloud} onSelectItem={handleItemSelect}></PortfolioItem>
      </div>
      {selectedViz == String(0) && <div className='viz__container'>
        <TableauViz id={selectedViz}></TableauViz>
      </div>}

    </div>

  );
}

export default Portfolio;