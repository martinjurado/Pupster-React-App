import React from "react";
import "./style.css"

function Header(props) {
  return (
    <div className="header text-center">
       <img 
      src = "http://doanarae.com/doanarae/8207-dog-wallpapers-for-desktop_13458.jpg"
      alt = "pup"
      className="w-100"
       />
      <h4 className="sub-header">Meet your New Best Friend</h4>
      <h1>Pupster App</h1>
    </div>
  );
}

export default Header;
