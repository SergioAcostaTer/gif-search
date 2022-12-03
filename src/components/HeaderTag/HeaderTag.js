import React from "react";
import "./headertag.css";

const HeaderTag = ({ tag }) => {
  return (
    <>
      <div className="header-tag">
        <h1>{tag}</h1>
      </div>
    </>
  );
};

export default HeaderTag;
