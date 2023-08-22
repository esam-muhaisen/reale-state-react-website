import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "../exports";
import OutsideClickHandler from "react-outside-click-handler";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img className="imagelogo" src={logo} alt="logo" />
        <OutsideClickHandler 
          onOutsideClick={()=>{
            setMenuOpen(false)
          }}
        >
          <div
            className="flexCenter header-menu"
            style={getMenuStyles(menuOpen)}
          >
            <a href="#Residencies">Residencies</a>
            <a href="#Value">Our Value</a>
            <a href="#Contact">Contact Us</a>
            <a href="#Started">Get Started</a>
            <Button contant="Contact" />
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}
