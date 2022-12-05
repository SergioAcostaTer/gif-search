import React, { useEffect, useState } from "react";
import "./Image.css";
import downloadIcon from "../../sources/download.svg";
import linkIcon from "../../sources/link.svg";
import checkIcon from "../../sources/check.svg";
import addGif from "../../services/addGif";
import removeGif from "../../services/removeGif";
import checkFavourite from "../../services/checkFavourite";

const Image = ({ uri, alt, date, save }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [heartMode, setHeartMode] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      checkFavourite(localStorage.token, save.id).then((res) => {
        setHeartMode(res.exist);
        // console.log(res, save);
      });
    }
    // console.log(localStorage.token, save.id, heartMode)
  }, []); //eslint-disable-line

  const token = localStorage.token;

  return (
    <>
      <div className="image-container noSelect">
        {showOptions ? (
          <div className="buttons" onMouseOver={() => setShowOptions(true)}>
            <button
              className="download"
              onClick={() => {
                (async () => {
                  //create new a element
                  let a = document.createElement("a");
                  // get image as blob
                  let response = await fetch(save.images?.original?.url);
                  let file = await response.blob();
                  // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
                  a.download = `${alt.split("by")[0]}`;
                  a.href = window.URL.createObjectURL(file);
                  //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
                  a.dataset.downloadurl = [
                    "application/octet-stream",
                    a.download,
                    a.href,
                  ].join(":");
                  //click on element to start download
                  a.click();
                })();
              }}
            >
              <img src={downloadIcon} alt={"download button"} />
            </button>
            <button
              className="link"
              onClick={() => {
                navigator.clipboard.writeText(uri);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 1500);
              }}
            >
              <img src={copied ? checkIcon : linkIcon} alt={"share button"} />
            </button>
            {token ? (
              !heartMode ? (
                <button
                  className="like"
                  onClick={async () => {
                    setHeartMode(true);
                    await addGif(token, save);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    {/* <path fill="red"
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    
                  /> */}
                    <path
                      fill="white"
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="like"
                  onClick={async () => {
                    setHeartMode(false);
                    await removeGif(token, save);
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
                      fill="white"
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    />
                  </svg>
                </button>
              )
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <div
          onClick={() => setShowOptions(!showOptions)}
          /*onMouseOver={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}*/ className="clickable"
        >
          <video autoPlay loop muted className="image">
            <source src={uri} alt={alt} type="video/mp4" />
          </video>

          {showOptions ? (
            <div className="image-options">
              <h3 className="image-title">{alt}</h3>
              <p className="image-date">
                {date.substring(0, 4) !== "0000" ? date.substring(0, 4) : ""}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Image;
