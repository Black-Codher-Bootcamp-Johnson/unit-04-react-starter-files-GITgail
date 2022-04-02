import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";

const Header = (props) => {
  return (
    <header>
      <h1>Bookcase</h1>
      <nav>
          <Link to="/">Home </Link> 
            <Link to="/bookcase" className="bookLink">Bookcase </Link>
            <Link to="/about" className="aboutLink">About</Link>
      </nav>
    </header>
  );
}

export default Header;


