import React, { useContext, useEffect, useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import ButtonProfile from "../components/ButtonProfile/ButtonProfile";
import HeaderTag from "../components/HeaderTag/HeaderTag";
import forbiddenIcon from "../sources/forbidden.svg";
import starIcon from "../sources/star.svg";
// import bookmarkIcon from "../sources/bookmark.svg";

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
  // const saved = () => {
  //   navigate("/saved");
  // };

  return (
    <>
      <HeaderTag tag={"Profile"} back={-1} />
      <Avatar
        name={realUser.name}
        email={realUser.email}
        pic={realUser.picture}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div>
          <ButtonProfile
            text={"Favourites"}
            img={starIcon}
            className={"favs"}
            func={favourites}
          />
          <FavouritesPreview token={localStorage.token} />
        </div>
        {/* <ButtonProfile
          text={"Saved GIFs"}
          img={bookmarkIcon}
          className={"saved"}
          func={saved}
        /> */}
        <ButtonProfile
          text={"Log out of the account"}
          img={forbiddenIcon}
          className={"log-out"}
          func={logOut}
        />
      </div>
      <NavMobile position="fixed" />
    </>
  );
};

export default Profile;
