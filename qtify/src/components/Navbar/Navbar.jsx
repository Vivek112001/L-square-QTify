import React from "react";
import { Switch, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Navbar.css';
import SearchBox from "../SearchBox/SearchBox";
import Button from "../Button/Button";

function Navbar({ }) {
  return (
    <nav className="navbar">
      <div className="navbar-holder centered">
        <Link to="/">
          <Logo />
        </Link>

        <SearchBox />

        <Button />
      </div >
    </nav >
  );
}

export default Navbar;
