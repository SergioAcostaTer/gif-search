import React, { useEffect, useState } from "react";
import sampleGif from "../../sources/charge.png";
import "../NowTrending/NowTrending.css";
import { getPreview } from "../../services/getPreview";

const Background = ({ topic }) => {
  const [src, setSrc] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getPreview(topic)
      .then((image) => setSrc(image.data[0]?.images?.original?.mp4))
      .then(() => setIsLoading(false));
  }, [topic]);

  return (
    <>
      {!loading ? (
        <video
          rel="preconnect"
          autoPlay
          loop
          muted
          className="trending-background"
        >
          <source src={src} alt={topic} type="video/mp4" />
        </video>
      ) : (
        <img className="trending-background" src={sampleGif} alt={"best cat"} />
      )}
    </>
  );
};
export default Background;
