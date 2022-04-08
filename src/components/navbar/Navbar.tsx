import React from 'react';
import './Navbar.css';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome, AiTwotoneTool, AiFillPhone } from 'react-icons/ai'
import { FaMedal, FaGraduationCap } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import Tooltip from '@mui/material/Tooltip';
import Portfolio from './../portfolio/Portfolio';



function Navbar() {
  return (
    <div className="Nav">

      <div className='nav-item'>
        <a href='#home'><AiFillHome /></a>
        <a href="#home" id='nav-item-label'>Home</a>
      </div>



      <div className='nav-item'>
        <a href='#about'><BsFillPersonFill /></a>
        <a href="#about" id='nav-item-label'>About</a> 
      </div>



      <div className='nav-item'>
        <a href='#experience'><FaMedal /></a>
        <a href="#experience" id='nav-item-label'>Experience</a> 
      </div>



      <div className='nav-item'>
        <a href='#skills'><AiTwotoneTool /></a>
       <a href='#skills' id='nav-item-label'>Skills</a> 
      </div>




      <div className='nav-item'>
       <a href='#education'><FaGraduationCap /></a>
       <a href="#education" id='nav-item-label'>Education</a> 
      </div>



      <div className='nav-item'>
        <a href='#portfolio'><ImBooks /></a>
       <a href='#portfolio' id='nav-item-label'>Portfolio</a> 
      </div>


      <div className='nav-item'>
        <a href='"#contacts"'><AiFillPhone /></a>
       <a href="#contacts" id='nav-item-label'>Contacts</a> 
      </div>



    </div>
  );
}

export default Navbar;

