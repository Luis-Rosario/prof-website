
import React from 'react';
import { ExpCardContent } from './Experience';
import './Experience.css';







function ExperCard({ content }: { content: ExpCardContent }) {


  const responsabilityItem = content.responsabilies.map((resp: String, index: number) => (
    <li key={index}> {resp}</li>
  ))


  return (
    <div className="experience-card">
      <div className='expCard-header'>

        <div id='header-left'>
          <h2 className='card-title'>{content.title}</h2>
          <h6 className='card-date'>{content.startDate} - {content.endDate}</h6>
        </div>

        <div className='header-right-sec'>
      
            <div className='comp-location'>
              <h4 className='card-company'>{content.company}</h4>
              <h5 className='card-location'>{content.location}</h5>
            </div>

            <div className='company-logo'>
              <img src={content.logoPath} />
            </div>
           
    
        </div>

      </div>

      <div className='expCard-descp-cont'>
        <div className='expCard-company-desc'>
          {content.comp_description}
        </div>
        <div className='expCard-responsab'>
          <div className='expCard-responsab-title'>
            <h4>Responsabilities</h4>
          </div>

          <ul className='responsability-List'>
            {responsabilityItem}
          </ul>


        </div>
      </div>

    </div>
  );
}

export default ExperCard;