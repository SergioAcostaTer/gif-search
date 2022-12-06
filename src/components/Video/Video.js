import React from "react";

const Video = ({ id, src, alt, className, ...props }) => {
  return (
    <>
      <video disableRemotePlayback className={className} autoPlay loop muted key={id ? id : ""} {...props}>
        <source
          src={src}
          alt={alt}
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default Video;
