import React, { useState } from "react";
import "./Image.css";
import downloadIcon from "../../sources/download.svg";
import linkIcon from "../../sources/link.svg";
import checkIcon from "../../sources/check.svg";

const Image = ({ uri, alt, date }) => {
  const [showOptions, setShowOptions] = useState(false);
  let [copied, setCopied] = useState(false)

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
                  let response = await fetch(uri);
                  let file = await response.blob();
                  // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
                  a.download = `${alt}`;
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
              onClick={() => {
                navigator.clipboard.writeText(uri);
                setCopied(true)
                setTimeout(() => {
                  setCopied(false)
                }, 1500)
              }}
            >
              <img src={copied ? checkIcon : linkIcon} alt={"share button"} />
            </button>
          </div>
        ) : (
          ""
        )}

        <div
          onClick={() => setShowOptions(!showOptions)}
          /*onMouseOver={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}*/ className="clickable"
        >
          <img className="image" src={uri} alt={alt} />

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
