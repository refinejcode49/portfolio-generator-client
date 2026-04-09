import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <form>
        <label>
          Username :
          <input type="text" placeholder="enter an username" />
        </label>
        <label>
          Email :
          <input type="email" placeholder="enter a valid email adress" />
        </label>
        <label>
          Password :
          <input type="password" placeholder="enter a password" />
        </label>
        <button>Sign up</button>
      </form>
      <p>
        Already a member ?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
