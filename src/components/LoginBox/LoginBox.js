import React from "react";
import "./LoginBox.css";

const LoginBox = ({ children }) => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Log in to your account.</h1>
          <img
            className="login-logo"
            alt="google"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          />
          <h2 className="login-subtitle">To continue, log in with Google</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default LoginBox;
