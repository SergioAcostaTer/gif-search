import React, { useEffect, useState } from "react";
import sampleGif from "../../sources/charge.png";
import "../NowTrending/NowTrending.css";
import { getPreview } from "../../services/getPreview";

const Background = ({ topic }) => {
  const [src, setSrc] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getPreview(topic)
      .then((image) => setSrc(image.data[0]?.images?.preview_gif?.url))
      .then(() => setIsLoading(false));
  }, [topic]);

  return (
    <>
      {!loading ? (
        <img className="trending-background" src={src} alt={topic} />
      ) : (
        <img className="trending-background" src={sampleGif} alt={"best cat"} />

      )}
    </>
  );
};
export default Background;
