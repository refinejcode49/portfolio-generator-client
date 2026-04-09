import React, { useContext } from "react";
import { Modal } from "./styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <h1>CodeFolio</h1>
      <Modal />

      {isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <>
          <Link to="/sign-up">
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
