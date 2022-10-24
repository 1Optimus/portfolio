import React from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Portafolio from './components/portafolio/Portafolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Portafolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
