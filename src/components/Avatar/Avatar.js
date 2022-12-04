import React from "react";
import "./Avatar.css"
import defaultAavatarPic from "../../sources/defaultAvatar.png"
  
const Avatar = ({ pic, name, email }) => {
  return (
    <>
      <div className="avatar-container">
      <img className="avatar-pic" referrerPolicy="no-referrer" src={pic ? pic : defaultAavatarPic} alt={name} />

        <div className="avatar-box">
            <div className="avatar-text">
                <p className="avatar-name">{name?.split(" ").splice(0,3).join(" ")}</p>
                <p className="avatar-email">{email}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
