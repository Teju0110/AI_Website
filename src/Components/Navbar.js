import React, { useState } from "react";
import logo from "../Images/logo.png";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#possibility">Open Web</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Liabrary</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navBar">
      <div className="navBar_row_menu">
        <div className="navBar_links">
          <div className="navBar_links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navBar_links_container">
            <Menu />
          </div>
          <div className="navBar_links_sign">
            <p>Sign In</p>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="navBar_menu">
        <div className="navBar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        {toggleMenu == false ? (
          <RiMenu3Line
            className="menuIcon"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <>
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
              className="menuIcon"
            />

            <div className="navBar_menu_container">
              <div className="navBar_menu_items">
                <Menu />
              </div>
              <div className="navBar_menu_sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
