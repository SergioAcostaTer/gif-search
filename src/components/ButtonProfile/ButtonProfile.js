import React from "react";
import "./ButtonProfile.css";

const ButtonProfile = ({ text, img, className, func }) => {
  return (
    <>
      <button
        className="button-profile"
        onClick={func}
      >
        <img src={img} alt={text} />
        <p className={className}>{text}</p>
      </button>
    </>
  );
};

export default ButtonProfile;
