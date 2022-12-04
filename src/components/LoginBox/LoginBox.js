import React from "react";
import "./LoginBox.css";
import googleIcon from "../../sources/google.png"

const LoginBox = ({ children }) => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Log in to your account.</h1>
          <img
            className="login-logo"
            alt="google"
            src={googleIcon}
          />
          <h2 className="login-subtitle">To continue, log in with Google</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default LoginBox;
