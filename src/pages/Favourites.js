import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderTag from "../components/HeaderTag/HeaderTag";
import NavMobile from "../components/NavMobile/NavMobile";
import getFavourites from "../services/getFavourites";
import loadingIcon from "../sources/loading.gif";

import "./styles/Favourites.css";

const Favourites = ({ any }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Favourites⭐";
    if (!localStorage.user) {
      navigate("/login");
    }

    getFavourites(localStorage.token)
      .then((data) => setData(data))
      .then(() => setIsLoading(false));
  }, []); //eslint-disable-line

  return (
    <>
      <HeaderTag tag={"Favourites"} />
      <NavMobile position="fixed" />
      {!isLoading ? (
        <ul className="fav-list">
          {data.map((gif) => (
            <li key={gif.id}>
              <Link to={`/post/${gif.id}`}>
                {/* <img src={gif?.images.original.url} alt={gif?.title} /> */}
                <video autoPlay loop muted className="image">
                  <source
                    src={gif?.images.original.mp4}
                    alt={gif?.title}
                    type="video/mp4"
                  />
                </video>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="loading-container">
          <img src={loadingIcon} alt={"loading"} />
        </div>
      )}
    </>
  );
};

export default Favourites;
