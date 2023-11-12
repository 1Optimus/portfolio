import React,{ useContext } from "react";
import { motion } from "framer-motion";
import Toggle from "./components/Toggle/Toggle";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Portafolio from './components/portafolio/Portafolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    style={{
      background: darkMode ? "#0b2846" : "#e1effd",
      color: darkMode ? "#f1f8fe" : "#10406a",
    }}
    >
    <div className="App"> 
      <Toggle />
    </div>
    <motion.div
    variants={{
      hidden: {opacity: 0, y:75},
      visible: {opacity:1, y:0},
    }}
    initial="hidden"
    whileInView='visible'
    transition={{ duration: 0.5, delay: 0.25 }}
    >
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Portafolio/>
    <Contact/>
    <Footer/>
    </motion.div>
    </div>
  );
}
export default App;
