import React from 'react';
import ButCluster from './ButCluster';
import './Header.css';


function Header() {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Luís Rosário</h1>
       <h5 className='text-light'>Computer science Engineer</h5>
      <ButCluster></ButCluster>
     </div>
   </header>
  );
}

export default Header;
