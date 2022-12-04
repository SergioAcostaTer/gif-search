import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getFavourites from "../../services/getFavourites";
import "./FavouritesPreview.css";

const FavouritesPreview = ({ token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFavourites(token).then((data) => setData(data?.splice(0, 6)));
  }, []); //eslint-disable-line

  return (
    <>
      <Link to={"/favourites"}>
        <div className="fav-cont">
          {data
            ? data.map((element) => (
                <img
                  key={element.id}
                  src={element?.images.original.url}
                  alt={element?.title}
                />
              ))
            : ""}
        </div>
      </Link>
    </>
  );
};

export default FavouritesPreview;
