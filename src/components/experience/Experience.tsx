
import  React  from 'react';
import ExperCard from './ExperCard';
import './Experience.css';



export type ExpCardContent = {
  title: String,
  comp_description: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  responsabilies: String[],
  logoPath: string
}

const mscResearch: ExpCardContent = {
  title: 'Msc. researcher',
  comp_description: 'NOVA LINCS is a leading research lab in the area of Computer Science and Informatics, hosted at the Departamento de Informática - School of Science and Technology - NOVA University of Lisboa, a pioneering national institution in the field.',
  company: 'NOVA LINCS',
  location:  'Lisbon',
  startDate: 'September 2020',
  endDate: 'December 2021',
  responsabilies: ['Took part in a collaboration with the Madeira Whale Museum to research bioacoustic classification methods and signal processing techniques for the distinction of several cetacean species.', 'Developed a pipeline capable of processing and correctly distinguish cetacean vocalization recordings using machine learning models.'],
  logoPath: require('../../assets/novalincs.png')
};


const internshipCreate: ExpCardContent = {
  title: 'Internship',
  comp_description: 'CreateIT is a portuguese company focused on developing multi-platform and business support solutions.',
  company: 'Create IT',
  location:  'Lisbon',
  startDate: 'March 2019',
  endDate: 'August 2019',
  responsabilies: ['Performed the gradual migration of an existing company product from .NET MVC to Angular, while presenting stable builds for production.', 'Written a final report documenting the applied technical approach.'],
  logoPath:  require('../../assets/createit.png')
};




function Experience() {
    return (
      <div id="experience" className="container experience__container"> 
         <h2 id='sec-title'>My work experience</h2>
         <div className='expcard-container'>
          <ExperCard content={mscResearch}></ExperCard>
          <ExperCard content={internshipCreate}></ExperCard>
         </div>
      </div>
    );
  }
  
  export default Experience;

  

  