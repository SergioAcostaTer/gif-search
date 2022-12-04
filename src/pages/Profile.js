import React, { useContext, useEffect, useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import ButtonProfile from "../components/ButtonProfile/ButtonProfile";
import HeaderTag from "../components/HeaderTag/HeaderTag";
import forbiddenIcon from "../sources/forbidden.svg";
import starIcon from "../sources/star.svg";

import GlobalContext from "../context/GlobalContext";
import NavMobile from "../components/NavMobile/NavMobile";
import { useNavigate } from "react-router-dom";
import FavouritesPreview from "../components/FavouritesPreview/FavouritesPreview";

const Profile = ({ any }) => {
  const [realUser, setRealUser] = useState("");

  useEffect(() => {
    document.title = "Profile👤";
  }, []);

  const { user } = useContext(GlobalContext);
  // console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    setRealUser(user);

    if (!localStorage.user) {
      navigate("/login");
    } else {
      setRealUser(JSON.parse(localStorage.user));
    }
  }, []); //eslint-disable-line

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  const favourites = () => {
    navigate("/favourites");
  };

  return (
    <>
      <HeaderTag tag={"Profile"} back={-1}/>
      <Avatar
        name={realUser.name}
        email={realUser.email}
        pic={realUser.picture}
      />
      <div>
        <ButtonProfile
          text={"Favourites"}
          img={starIcon}
          className={"favs"}
          func={favourites}
        />
        <FavouritesPreview token={localStorage.token}/>
      </div>
      <ButtonProfile
        text={"Log out of the account"}
        img={forbiddenIcon}
        className={"log-out"}
        func={logOut}
      />
      <NavMobile position="fixed" />
    </>
  );
};

export default Profile;
