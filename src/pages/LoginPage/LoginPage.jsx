import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { FormContainer, Input, Label, SubmitButton } from "../../styles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const { authenticateUser } = useContext(AuthContext);

  const nav = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // stop the page from reloading
    const userToLogin = { email, password };
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, userToLogin)
      .then((res) => {
        console.log("user is login", res.data);
        localStorage.setItem("authToken", res.data.authToken);
        return authenticateUser();
      })
      .then(() => {
        nav("/profile");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <FormContainer onSubmit={handleLogin}>
        <Label>
          Email :
          <Input
            type="email"
            placeholder="Enter a valid email adress"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Label>
        <Label>
          Password :
          <Input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Label>
        <SubmitButton>Login</SubmitButton>
      </FormContainer>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <p>
        New here ?<Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default LoginPage;
