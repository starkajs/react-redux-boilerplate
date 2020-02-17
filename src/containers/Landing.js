import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to the landing page</h1>
      <ul>
        <li>
          <Link to="/one">Route One</Link>
        </li>
        <li>
          <Link to="/two">Route Two</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
