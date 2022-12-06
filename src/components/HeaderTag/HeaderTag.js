import React from "react";
import "./Headertag.css";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../sources/arrow-left.svg"

const HeaderTag = ({ tag, back = -1}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-tag">
        <button className="button-back noSelect" onClick={() => navigate(back)}>
          <img src={arrowIcon} alt={"back button"}/>
        </button>
        <h1 className="header-title">{tag}</h1>
      </div>
    </>
  );
};

export default HeaderTag;
