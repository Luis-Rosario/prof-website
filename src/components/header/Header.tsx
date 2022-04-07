import React from "react";
import ButCluster from "./ButCluster";
import "./Header.css";
import ProfileImg from "../../assets/img-cut.png";
import ProfileImgNoBg from "../../assets/img-removebg-preview-cut.png";
import Socials from "./Socials";


function Header() {
  return (
   <header id="home">
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Luís Rosário</h1>
       <h5 className='text-light'>Computer Science Engineer</h5>
      <ButCluster></ButCluster>
      <div className="profile-img">
        <img src={ProfileImgNoBg} alt="profileImg" />
      </div>
      <a href="#about" className="scrolld">Scroll down</a>
      <Socials></Socials>
     </div>
   </header>
  );
}

export default Header;
