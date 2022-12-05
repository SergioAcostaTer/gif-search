import React from "react";
import "./ButtonProfile.css";

const ButtonProfile = ({ text, img, className, func }) => {
  return (
    <>
      <button
        onClick={func}
        className={`${className} button-profile`}
      >
        <img src={img} alt={text} />
        <p>{text}</p>
      </button>
    </>
  );
};

export default ButtonProfile;
