import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { getGifsList } from "../services/getGifsList";

const Search = ({ any }) => {
  const [data, setData] = useState([]);
  const [params] = useSearchParams();
  const query = params.get("query") || "panda";

  useEffect(() => {
    getGifsList(query).then((data) => {
      setData(data.data);
    });
  }, [query]); //eslint-disable-line

  window.scroll(0,0)
  
  // if (window.scrollY > 1500){
  //   getGifsList(query).then((newData) => {
  //     setData([...data, newData]);
  //   });
  //   console.log("yes")
  // }

  return (
    <>
      <SearchBar />
      <List array={data} />
    </>
  );
};

export default Search;
