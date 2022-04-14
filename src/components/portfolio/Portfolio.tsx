
import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import PortfolioItem from './PortolioItem';
import TableauViz from './TableauViz';
import { IoLogoTableau } from 'react-icons/io5'
import { AiFillGithub } from 'react-icons/ai'
import { SiJupyter } from 'react-icons/si'
import { MdOutlineWebAsset } from 'react-icons/md'
import { IconType } from 'react-icons';


export type ProjectCardContent = {
  title: string,
  description: String,
  skillImgPath: string,
  butIco:  string,
  url: string,
  technologies: string[],
  id: number,
}

const f1: ProjectCardContent = {
  title: 'F1 historical overview - Data vizualiazation',
  description: 'A conjunction of seven data vizualization dashbords intended to answear several research questions regarding historical formula 1 data.',
  skillImgPath: require('../../assets/vizF1.png'),
  technologies: ['Tableau', 'Phyton'],
  butIco: 'IoLogoTableau',
  url: 'https://public.tableau.com/app/profile/luis.ros.rio/viz/F1dataanalysisanhistoricaloverview/Alldash',
  id: 0
};


const llemmePlay: ProjectCardContent = {
  title: 'LlemePlay',
  description: 'Web application of a service which facilitates the lending and exchange of hard copy videogames between users.',
  skillImgPath: require('../../assets/lemme.png'),
  url: 'https://trusting-roentgen-21fcd7.netlify.app/',
  technologies: ['Angular', 'Typescript'],
  butIco: 'MdOutlineWebAsset',
  id: 1,
};

const grantMgm: ProjectCardContent = {
  title: 'Grant approval platform',
  description: 'Grant management system to facilitate the application and attribution of grants to researchers. Frond end developed with react and backend built using the Spring framwork in kotlin.',
  skillImgPath: require('../../assets/grant.png'),
  url: 'https://github.com/Luis-Rosario/grant-app',
  technologies: ['React', 'Kotlin', 'Spring'],
  butIco: 'AiFillGithub',
  id: 2,
};


const mlTutorial: ProjectCardContent = {
  title: 'Machine learning problems',
  description: 'Familiar with Javascript and Typescript frameworks such as Angular and React to build scalable web applications. Used during my internship and in other academic projects. ',
  skillImgPath: require('../../assets/mlTut.png'),
  url: 'https://github.com/Luis-Rosario/mlNotebook/blob/main/ml-prob-sol.ipynb',
  technologies: ['Python', 'Machine', 'Tensorflow', 'keras'],
  butIco: 'AiFillGithub',
  id: 3,
};


const licPltCNN: ProjectCardContent = {
  title: 'CNN for licence plate detection',
  description: 'Experienced with the git workflow. Mostly used Github but also have some experience with Bitbucket.',
  skillImgPath: require('../../assets/licencePlat.png'),
  url: '',
  technologies: ['Python', 'Deep learning', 'Tensorflow', 'Convolutional neural networks'],
  butIco: 'AiFillGithub',
  id: 4
};


const rnnDoor: ProjectCardContent = {
  title: 'Image text detection with RNN',
  description: 'Have deployed web applications using Azure combining multiple services.',
  skillImgPath: require('../../assets/task3.png'),
  url: '',
  technologies: ['Python', 'Deep learning', 'Tensorflow', 'Convolutional neural networks', 'Recurrent neural networks'],
  butIco: 'AiFillGithub',
  id: 5
};


function Portfolio() {

  let selectedItem = ''

  const [selectedViz, setSelectedViz] = useState(selectedItem as string)


  const handleItemSelect = (item: string) => {
    setSelectedViz(item)  }


  return (
    <div id='portfolio' className="container portfolio__container">
      <h2 id='sec-title'>Portfolio</h2>

      <div className='portItem-container'>
        <PortfolioItem content={f1} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={llemmePlay} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={grantMgm} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={mlTutorial} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={licPltCNN} onSelectItem={handleItemSelect}></PortfolioItem>
        <PortfolioItem content={rnnDoor} onSelectItem={handleItemSelect}></PortfolioItem>
      </div>
      {selectedViz == String(0) && <div className='viz__container'>
        <TableauViz id={selectedViz}></TableauViz>
      </div>}

    </div>

  );
}

export default Portfolio;