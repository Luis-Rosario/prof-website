
import React from 'react';
import './About.css';




function About() {


  const aboutMe:String= `Master's degree in Computer Science and Engineering from NOVA School of Science and Technology, highly motivated and looking for a first job experience in the field. I am eager to be part of exciting projects where I can keep developing new skills and put my knowledge into action. Dedicated about what I do, a team player and have a particular interest in machine learning, full stack development and data visualization.`

  return (
    <div id='about'>

     


      <div className='container about__container'>
       <div className='title-section'>
          <h2 className='about-title'>About me</h2>
        </div>
        <div className='about-content'>{aboutMe}</div>
      </div>
    </div>
  );
}

export default About;

/** <h3 className='subtitle'>Get to know</h3> 
      <h2 className='title'>About me</h2> */