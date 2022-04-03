import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="header">
      <h1>Welcome to my About page</h1>
      <div className="breadcrumb">
        <Link to="/"> Home </Link> 
        </div>
      <div className="page">Welcome to the Bookcase Application.</div>
        This React application was created by 
        It allows a user to add their book selection to their book list of choice.books. They can find find the latest books by name, author or description.
        
        They add books to their booklist by clicking +Add button.
    </div>

  );
};

export default About;








