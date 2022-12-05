import React from "react";
import downloadIcon from "../../sources/download.svg";

const DownloadButton = ({ name, url, className = "download" }) => {
  return (
    <>
      <button
        className={`${className} noSelect`}
        onClick={() => {
          (async () => {
            //create new a element
            let a = document.createElement("a");
            // get image as blob
            let response = await fetch(url);
            let file = await response.blob();
            // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
            a.download = `${name}`;
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
    </>
  );
};

export default DownloadButton;
