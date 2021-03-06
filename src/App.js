import React from 'react';
import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  
  return (
    <div className="app">
      <Nav/>
      <Home />
      <Portfolio />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
