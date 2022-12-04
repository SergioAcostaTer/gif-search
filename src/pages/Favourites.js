import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTag from "../components/HeaderTag/HeaderTag";
import NavMobile from "../components/NavMobile/NavMobile";
import getFavourites from "../services/getFavourites";

import "./styles/Favourites.css";

const Favourites = ({ any }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Favourites⭐';  
    getFavourites(localStorage.token).then((data) => setData(data));
  }, []); //eslint-disable-line

  return (
    <>
      <HeaderTag tag={"Favourites"} />
      <NavMobile position="fixed" />
      <ul className="fav-list">
        {data.map((gif) => (
          <li key={gif.id}>
            <Link to={`/details/${gif.id}`}>
              <img src={gif?.images.original.url} alt={gif?.title} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favourites;
