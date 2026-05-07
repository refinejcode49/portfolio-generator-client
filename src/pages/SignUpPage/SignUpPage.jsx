import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FormContainer, Input, Label, SubmitButton } from "../../styles";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault(); // stop the page from reloading
    const userToCreateInDb = { username, email, password };
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signup`, userToCreateInDb)
      .then((res) => {
        console.log("user created in the DB", res.data);
        nav("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <FormContainer onSubmit={handleSignup}>
        <Label>
          Username :
          <Input
            type="text"
            placeholder="Enter an username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Label>
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
        <SubmitButton>Sign up</SubmitButton>
      </FormContainer>
      <p>
        Already a member ?<Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default SignUpPage;
