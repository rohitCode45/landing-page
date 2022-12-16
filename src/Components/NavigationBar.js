import React from "react";
import logo from "./Constants/Logos/logo ramaera 1.png";
import { Icon } from '@iconify/react';
import "./NavigationBar.scss";
import { navItemLeft, navItemRight, navItems } from "./Constants/data";

function NavigationBar() {
  return (
    <div className="nav-container">
      <div>
        <img className="nav-logo" src={logo}></img>
      </div>
      <div className="nav-item-container">
        <div className="nav-items">
          {navItems.leftPart.map((item)=>{return (<div className="nav-item">{item}</div>)})}
        </div>
        <div className="nav-items">
    {navItems.rightPart.map((item)=>{return (<div className="nav-item">{item}</div>)})}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
