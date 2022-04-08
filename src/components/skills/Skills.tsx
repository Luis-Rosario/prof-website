
import React from 'react';
import SkillItem from './SkillItem';
import './Skills.css';


export type SkillCardContent = {
  title: String,
  description: String,
  skillImgPath: string,
}

const machineLearning: SkillCardContent = {
  title: 'Machine learning',
  description: 'Experience in employing diverse machine and deep learning algorithms in order to solve complex problems. Experienced with many Python ML libraries such as Keras, Tensorflow and Scikit-learn as they were extensively used throught my master\'s degree and dissertation.',
  skillImgPath:  require('../../assets/ml.png'),
};


const javaDev: SkillCardContent = {
  title: 'Java development',
  description: '6 years of experience. Used extensively throughout many of my university projects and assignments. Capable of building scalable and testable aplications using Spring.',
  skillImgPath:  require('../../assets/spring.png'),
};

const dataViz: SkillCardContent = {
  title: 'Data visualization',
  description: 'Capable of building insightfull visualizations from different types of data which may required prior processing. Experienced with data visualization tools such as Tableau and Python libraries such as Matplotlib and Pandas.',
  skillImgPath:  require('../../assets/viz.png'),
};


const webDevelopment: SkillCardContent = {
  title: 'Web development',
  description: 'Familiar with Javascript and Typescript frameworks such as Angular and React to build scalable web applications. Used during my internship and in other academic projects. ',
  skillImgPath:  require('../../assets/webDev.png'),
};


const git: SkillCardContent = {
  title: 'Git workflow',
  description: 'Experienced with the git workflow. Mostly used Github but also have some experience with Bitbucket.',
  skillImgPath:  require('../../assets/Git.png'),
};


const cloud: SkillCardContent = {
  title: 'Cloud services',
  description: 'Have deployed web applications using Azure combining multiple services.',
  skillImgPath:  require('../../assets/azure.png'),
};





function Skills() {
  return (
    <div id='skills' className="container skills__container">
      <h2 id='sec-title'>Skills</h2>

      <div className='skillItem-container'>
        <SkillItem content={machineLearning}></SkillItem>
        <SkillItem  content={javaDev}></SkillItem>
        <SkillItem  content={dataViz}></SkillItem>
        <SkillItem  content={webDevelopment}></SkillItem>
        <SkillItem  content={git}></SkillItem>
        <SkillItem  content={cloud}></SkillItem>
      </div>
    </div>


  );
}

export default Skills;

  /**
   * Machine learning
   * Java development
   * Data visualization
   * Web development
   * Git
   * Cloud services
   */