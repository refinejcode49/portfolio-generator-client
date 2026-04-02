import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>CodeFolio</h1>
      <Link to="/">
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default NavBar;
