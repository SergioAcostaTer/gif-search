import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderTag from "../components/HeaderTag/HeaderTag";
import getGifById from "../services/getGifById";
import defaultAvatar from "../sources/defaultAvatar.png";
import addGif from "../services/addGif";
import removeGif from "../services/removeGif";
import checkFavourite from "../services/checkFavourite";

import "../components/Image/Image.css";
import "./styles/Details.css";

const Details = ({ any }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [heartMode, setHeartMode] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      checkFavourite(localStorage.token, id).then((res) => {
        setHeartMode(res.exist);
      });
    }
    // console.log(localStorage.token, save.id, heartMode)
  }, []); //eslint-disable-line

  useEffect(() => {
    document.title = "easyGif";
    getGifById(id).then((gif) => setData(gif ? gif.data : ""));
    // console.log(data);
  }, []); //eslint-disable-line

  return (
    <>
      <HeaderTag tag={"Post"} />
      <div className="post">
        <div className="post-title">
          <img
            className="user-pic"
            src={data?.user?.avatar_url ? data?.user.avatar_url : defaultAvatar}
            alt={data?.user?.username ? data?.user?.username : ""}
          />
          <h4>{data?.title.split("by")[0]}</h4>
        </div>
        <img
          className="post-pic"
          src={data?.images.original.url}
          alt={data?.title}
        />
        <div className="post-lowbar">
          {!heartMode ? (
            <button
              className="like noSelect"
              onClick={async () => {
                setHeartMode(true);
                await addGif(localStorage.token, data);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill="black"
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </button>
          ) : (
            <button
              className="like noSelect"
              onClick={async () => {
                setHeartMode(false);
                await removeGif(localStorage.token, data);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill="red"
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
                <path
                  fill="black"
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
