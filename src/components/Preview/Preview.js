import React, { useEffect, useState } from "react";
import { getPreview } from "../../services/getPreview";
import "../SearchBar/SearchBar.css";
import loadingIcon from "../../sources/loading.gif"
const Preview = ({ query = "query" }) => {
  const [src, setSrc] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getPreview(query)
      .then((image) => setSrc(image.data[0]?.images?.preview_gif?.url))
      .then(() => setIsLoading(false));
  }, [query]);

  return (
    <>{loading ? <img className="preview" src={loadingIcon} alt={query} /> : <img className="preview" src={src} alt={query} />}</>
  );
};

export default Preview;
