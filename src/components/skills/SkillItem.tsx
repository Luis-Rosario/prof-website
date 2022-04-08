
import React from 'react';
import { SkillCardContent } from './Skills';
import './Skills.css';

function SkillItem({ content }: { content: SkillCardContent }) {
    return (
        <div id='skills' className="skill-card">
            <div className='skill-card-title'>
                <div className='skill-img'>
                    <img src={content.skillImgPath} />
                </div>
                <h3>{content.title}</h3>
            </div>
            <div className='skill-card-content'>
                {content.description}
            </div>
        </div>
    );
}

export default SkillItem;







