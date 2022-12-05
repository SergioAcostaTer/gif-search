import React, { useEffect, useState } from "react";
import sampleGif from "../../sources/charge.png";
import "../NowTrending/NowTrending.css";
import { getPreview } from "../../services/getPreview";
import Video from "../Video/Video";

const Background = ({ topic }) => {
  const [src, setSrc] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getPreview(topic)
      .then((image) => setSrc(image.data[0]?.images?.preview?.mp4))
      .then(() => setIsLoading(false));
  }, [topic]);

  return (
    <>
      {!loading ? (
        <Video
          src={src}
          alt={topic}
          rel="preconnect"
          className="trending-background"
        />
      ) : (
        <img className="trending-background" src={sampleGif} alt={"best cat"} />
      )}
    </>
  );
};
export default Background;
