import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { getTrending } from "../services/getTrending";
const Main = ({ any }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending().then((data) => {
      setData(data.data);
    });
  }, []); //eslint-disable-line

  return (
    <>
      <SearchBar />

      <List array={data} />
    </>
  );
};

export default Main;
