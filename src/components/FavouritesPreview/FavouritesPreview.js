import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getFavourites from "../../services/getFavourites";
import Video from "../Video/Video";
import "./FavouritesPreview.css";
import loadingIcon from "../../sources/loading.gif";

const FavouritesPreview = ({ token }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFavourites(token)
      .then((data) => setData(data?.splice(0, 6)))
      .then(() => setIsLoading(false));
  }, []); //eslint-disable-line

  return (
    <>
      <Link to={"/favourites"}>
        {!isLoading ? (
          <div className="fav-cont">
            {data.map((element) => (
              <Video
                key={element?.id}
                id={element?.id}
                src={element?.images?.preview?.mp4}
                alt={element?.title}
              />
            ))}
          </div>
        ) : (
          <div className="loading-div">
            <img src={loadingIcon} alt={"loading icon"} />
          </div>
        )}
      </Link>
    </>
  );
};

export default FavouritesPreview;
