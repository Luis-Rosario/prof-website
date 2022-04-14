
import React from 'react';

import { ProjectCardContent } from './Portfolio';

import '../skills/Skills.css';
import { IconType } from 'react-icons';
import { IoLogoTableau } from 'react-icons/io5'
import { AiFillGithub } from 'react-icons/ai'
import { SiJupyter } from 'react-icons/si'
import { MdOutlineWebAsset } from 'react-icons/md'




function PortfolioItem(props: { content: ProjectCardContent, onSelectItem: (item: any) => void }) {

    const handleSelectItem = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        let id = (event.target as HTMLElement)!.parentElement!.getAttribute('id')
        props.onSelectItem(id);


    }

    const keywordItem = props.content.technologies.map((tech: String, index: number) => (
        <li key={index}> {tech}</li>
    ))




    const onClickButton  = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window.open(props.content.url, '_blank')
    }

    return (
        <div className="portItem-card" onClick={(event) => handleSelectItem(event)}>
            <div className='portItem-card-title'>

                <h3>{props.content.title}</h3>
            </div>
            <div className='portItem-card-content'>
                <div id={String(props.content.id)} className='portItem-img'>
                    <img src={props.content.skillImgPath} />
                    <div className='keyword-pill'>
                        <ul className='keyword-pill-list'>
                            {keywordItem}
                        </ul>
                       
                            {props.content.butIco === 'IoLogoTableau' && <a onClick={(event) => onClickButton(event)} id='icon-port' href={props.content.url} target="_blank"><IoLogoTableau /></a>}
                            {props.content.butIco === 'AiFillGithub' && <a onClick={(event) => onClickButton(event)} id='icon-port' href={props.content.url} target="_blank"><AiFillGithub /></a>}
                            {props.content.butIco === 'SiJupyter' && <a onClick={(event) => onClickButton(event)} id='icon-port' href={props.content.url} target="_blank"><SiJupyter /></a>}
                            {props.content.butIco === 'MdOutlineWebAsset' && <a onClick={(event) => onClickButton(event)} id='icon-port' href={props.content.url} target="_blank"><MdOutlineWebAsset /></a>}
                        
                    </div>
                </div>

                {props.content.description}
            </div>
        </div>
    );
}

export default PortfolioItem;







