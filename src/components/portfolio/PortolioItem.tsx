
import React from 'react';

import { ProjectCardContent } from './Portfolio';

import '../skills/Skills.css';

function PortfolioItem( props: { content: ProjectCardContent, onSelectItem:(item: any) => void}) {

    const handleSelectItem = ( event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        let id=(event.target as HTMLElement)!.parentElement!.getAttribute('id')
        props.onSelectItem(id);

    }
 


    return (
          <div id={String(props.content.id)} className="skill-card" onClick={(event) => handleSelectItem( event)}>
            <div className='skill-card-title'>
                <div className='skill-img'>
                    <img src={props.content.skillImgPath} />
                </div>
                <h3>{props.content.title}</h3>
            </div>
            <div className='skill-card-content'>
                {props.content.description}
            </div>
        </div>
    );
}

export default PortfolioItem;







