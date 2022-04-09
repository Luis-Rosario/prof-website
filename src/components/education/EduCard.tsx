import React from 'react';
import { EduCardContent } from './Education';
import './Education.css';


function EduCard({ content }: { content: EduCardContent }) {


    const favCourseItem = content.favCourses.map((course: String, index: number) => (
        <li key={index}> {course}</li>
    ))


    return (
        <div className='education-card'>
            <div className='eduCard-header'>
                <div id='header-left'>
                    <h2 className='edu-degree'>{content.degree}</h2>

                    <div className='edu-institution' onClick={() => window.open('https://www.fct.unl.pt/en')}>
                        <h4 className='name-institution'>{content.institution}</h4>
                        <div className='inst-logo'>
                            <img src={content.logoPath} />
                        </div>
                    </div>
                </div>

                <div className='header-right-sec'>
                    <div className='as'>

                    </div>
                    <h5 className='edu-date'>{content.startDate} - {content.endDate}</h5>
                </div>
            </div>


            <div className='eduCard-content'>

                <div className='eduCard-courses-group'>
                    <div className='eduCard-favCourse-title'>
                        <h4>Favourite Courses</h4>
                    </div>

                    <ul className='favCourse-list'>
                        {favCourseItem}
                    </ul>
                </div>

                <div className='eduCard-grade'>
                    <div className='eduCard-grade-title'>
                        <h4>Final grade:</h4>
                    </div>
                    <div className='final-grade-group'>
                        <div id='grade'>
                            <h5 >{content.grade}</h5>
                            <h5>/20</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default EduCard;


