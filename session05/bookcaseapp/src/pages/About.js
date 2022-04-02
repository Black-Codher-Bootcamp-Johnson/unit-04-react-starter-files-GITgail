import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="header">
      <h1>About</h1>
      <div className="breadcrumb">
        <Link to="/"> Home </Link> 
        </div>
      <div className="page">Welcome to the Bookcase Application.</div>
        <p>This React application was created by <b>Gelly</b></p>
        <p> It allows a user to add their book selection to their book list of choice.books. They can find find the latest books by name, author or description.</p>
    </div>

  );
};

export default About;








