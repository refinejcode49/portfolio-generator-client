import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Container, Nav, Button, LoginButton } from "./styles";

const NavBar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <Nav>
        <Link to="/">
          <h1>CodeFolio</h1>
        </Link>

        {isLoggedIn ? (
          <Button onClick={handleLogout}>Log out</Button>
        ) : (
          <>
            <Link to="/login">
              <LoginButton>Login</LoginButton>
            </Link>
            <Link to="/signup">
              <Button>Create your portfolio</Button>
            </Link>
          </>
        )}
      </Nav>
    </Container>
  );
};

export default NavBar;
