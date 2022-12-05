import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderTag from "../components/HeaderTag/HeaderTag";
import NavMobile from "../components/NavMobile/NavMobile";
import getFavourites from "../services/getFavourites";
import loadingIcon from "../sources/loading.gif"

import "./styles/Favourites.css";

const Favourites = ({ any }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Favourites⭐';
    if (!localStorage.user) {
      navigate("/login");
    } 
    getFavourites(localStorage.token).then((data) => setData(data));
    setIsLoading(false)
  }, []); //eslint-disable-line

  return (
    <>
      <HeaderTag tag={"Favourites"} />
      <NavMobile position="fixed" />
      {
        !isLoading ? 
        <ul className="fav-list">
        {data.map((gif) => (
          <li key={gif.id}>
            <Link to={`/details/${gif.id}`}>
              <img src={gif?.images.original.url} alt={gif?.title} />
            </Link>
          </li>
        ))}
      </ul>
      :
      <img src={loadingIcon} alt={"loading"}/>
      }
    </>
  );
};

export default Favourites;
