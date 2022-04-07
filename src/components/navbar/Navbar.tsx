import React from 'react';
import './Navbar.css';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome, AiTwotoneTool, AiFillPhone } from 'react-icons/ai'
import { FaMedal, FaGraduationCap } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import Tooltip from '@mui/material/Tooltip';



function Navbar() {
  return (
    <div className="Nav">
      <Tooltip title="Home">
        <a href='#home'><AiFillHome /></a>
      </Tooltip>

      <Tooltip title="About">
      <a href='#about'><BsFillPersonFill /></a>
      </Tooltip>
      
      <Tooltip title="Experience">
      <a href='#experience'><FaMedal /></a>
      </Tooltip>

      <Tooltip title="Skills">
      <a href='#skills'><AiTwotoneTool /></a>
      </Tooltip>

      
      <Tooltip title="Education">
      <a href='#education'><FaGraduationCap /></a>
      </Tooltip>

      <Tooltip title="Portfolio">
      <a href='#portfolio'><ImBooks /></a>
      </Tooltip>

      <Tooltip title="Contacts">
      <a href='#contacts'><AiFillPhone /></a>
      </Tooltip>

    </div>
  );
}

export default Navbar;
