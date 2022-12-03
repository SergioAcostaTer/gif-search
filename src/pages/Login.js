import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import LoginBox from "../components/LoginBox/LoginBox";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const Login = ({ any }) => {
  const navigate = useNavigate();

  const globalContext = useContext(GlobalContext);
  const {user, setUser} = globalContext
  // console.log(globalContext.setUser)
  return (
    <>
      <LoginBox>
        <GoogleLogin
          theme={"filled_black"}
          text={"continue_with"}
          width={300}
          size={"medium"}
          onSuccess={(credentialResponse) => {
            // console.log(credentialResponse);
            const info = jwt_decode(credentialResponse.credential);
            console.log(info);
            setUser(info)
            navigate("/profile");
          }}
          onError={() => {
            console.log("Login Failed");
            navigate("/");
          }}
        />
      </LoginBox>
    </>
  );
};

export default Login;
