import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = (/*{ toggleModal }*/) => {
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
      {/* <Modal />
      <BG onClick={toggleModal} />*/}
      <form onSubmit={handleLogin}>
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
        <button>Login</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <p>
        New here ?<Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default LoginPage;
