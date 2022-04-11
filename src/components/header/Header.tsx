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
       <h2 className="hello-text">Hello I'm</h2>
       <h1 className="my-name">Luís Rosário</h1>
        <div className='line-reference'> </div>
       <h4 className='text-light'>Computer Science Engineer</h4>
     
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
