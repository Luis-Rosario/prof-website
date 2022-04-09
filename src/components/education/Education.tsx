import React from 'react'
import './Education.css'
import EduCard from './EduCard'

export type EduCardContent = {
  degree: String,
  institution: String,
  startDate: String,
  endDate: String,
  favCourses: String[],
  logoPath: string,
  location: string,
  grade: Number,
}


const bachDeg: EduCardContent = {
  degree: 'Bachelor\'s degree in Computer Science and Engineering',
  institution: 'NOVA School of Science and Technology',
  startDate: '2016',
  endDate: '2019',
  favCourses: ['Artificial intelligence', 'Distributed Systems', 'Algorithms and Data Structures'],
  logoPath: require('../../assets/nova_4.png'),
  location: 'Lisbon',
  grade: 15,
}

const mastersDeg: EduCardContent = {
  degree: 'Master\'s degree in Computer Science and Engineering',
  institution: 'NOVA School of Science and Technology',
  startDate: '2019',
  endDate: '2021',
  favCourses: ['Machine Learning', 'Learning from Unstructured Data', 'Data Modelling', 'Interactive Data Vizualization', 'Cloud Computing Systems'],
  logoPath: require('../../assets/nova_4.png'),
  location: 'Lisbon',
  grade: 17,
}


function Education() {
  return (

    <div id="education" className="container education__container">
      <h2 id='sec-title'>Education</h2>
      <div className='education-card-container'>
        <EduCard content={mastersDeg}></EduCard>
        <EduCard content={bachDeg}></EduCard>
      </div>
    </div>
  )
}


export default Education