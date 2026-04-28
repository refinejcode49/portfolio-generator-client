import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Container, H1, PrimaryBtn, SecondaryBtn, NavLinks } from "./styles";

const NavBar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <Link to="/">
        <H1>CodeFolio</H1>
      </Link>
      <Link to="/about">
        <NavLinks>How it works</NavLinks>
      </Link>

      {isLoggedIn ? (
        <PrimaryBtn onClick={handleLogout}>Log out</PrimaryBtn>
      ) : (
        <>
          <Link to="/login">
            <SecondaryBtn>Login</SecondaryBtn>
          </Link>
          <Link to="/signup">
            <PrimaryBtn>Create your portfolio</PrimaryBtn>
          </Link>
        </>
      )}
    </Container>
  );
};

export default NavBar;
