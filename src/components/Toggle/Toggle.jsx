import React, { useContext } from "react";
import "./Toggle.css";
import { themeContext } from "../../Context";
import Sun from './sun.svg';
import Moon from './moon.svg';
const Toggle = () => {
  const theme = useContext(themeContext);  
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div >
      <input
        type="checkbox"
        onClick={handleClick}
        id="darkmode-toggle"                
        />               
      <label htmlFor="darkmode-toggle" id="lblDarkmode">
      <img className="sun" src={Sun} alt="sun" />
      <img className="moon" src={Moon} alt="moon" />
      </label>
    </div>
  );
};

export default Toggle;
