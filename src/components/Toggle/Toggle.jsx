import React, { useContext } from "react";
import "./Toggle.css";
import { themeContext } from "../../Context";
import Sun from './sun.svg';
import Moon from './moon.svg';
const Toggle = () => {
  const theme = useContext(themeContext);  
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
    localStorage.setItem("darkMode", JSON.stringify(!theme.state.darkMode));    
  };
  return (
    <div >
      <input
        type="checkbox"
        onClick={handleClick}
        id="darkmode-toggle"     
        defaultChecked={theme.state.darkMode}   
        />               
      <label htmlFor="darkmode-toggle" id="lblDarkmode">
      {!theme.state.darkMode?(<img className="sun" src={Sun} alt="sun"/>):(<img className="moon" src={Moon} alt="moon" />)}      
     
      </label>
    </div>
  );
};

export default Toggle;
