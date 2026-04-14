import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <h1>CodeFolio</h1>
      </Link>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
