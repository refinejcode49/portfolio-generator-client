import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../../components/Modal/ModalComponent";

const SignUpPage = (/*{ toggleModal }*/) => {
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
      <ModalComponent>
        <form onSubmit={handleSignup}>
          <label>
            Username :
            <input
              type="text"
              placeholder="enter an username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label>
            Email :
            <input
              type="email"
              placeholder="enter a valid email adress"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            Password :
            <input
              type="password"
              placeholder="enter a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button>Sign up</button>
        </form>
        <p>
          Already a member ?<Link to="/login">Login</Link>
        </p>
      </ModalComponent>
    </>
  );
};

export default SignUpPage;
