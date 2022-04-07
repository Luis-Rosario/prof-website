import React from 'react';

import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Education from './components/education/Education';



function App() {
  return (
    <div className="App">    
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
