import React, { useContext, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import LoginBox from "../components/LoginBox/LoginBox";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import sendUser from "../services/sendUser";

const Login = ({ any }) => {
  const navigate = useNavigate();

  const globalContext = useContext(GlobalContext);
  const { setUser } = globalContext;

  useEffect(() => {
    document.title = 'Login👤';
    if (localStorage.user) {
      navigate("/profile");
    }
  }, []); //eslint-disable-line

  // console.log(globalContext.setUser)
  return (
    <>
      <LoginBox>
        <GoogleLogin
          theme={"filled_black"}
          text={"continue_with"}
          width={300}
          size={"medium"}
          onSuccess={async (credentialResponse) => {
            const info = jwt_decode(credentialResponse.credential);
            const userInfo = await sendUser(
              info.name,
              info.email,
              info.picture,
              info.email_verified
            );
            localStorage.user = JSON.stringify(userInfo);
            localStorage.token = userInfo.token
            setUser(userInfo);
            navigate("/profile");
          }}
          onError={() => {
            // console.log("Login Failed");
            navigate("/");
          }}
        />
      </LoginBox>
    </>
  );
};

export default Login;
