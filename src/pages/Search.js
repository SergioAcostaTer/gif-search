import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import List from "../components/List/List";
import NavMobile from "../components/NavMobile/NavMobile";
import SearchBar from "../components/SearchBar/SearchBar";
// import HeaderTag from "../components/HeaderTag/HeaderTag";
import { getGifsList } from "../services/getGifsList";

const Search = ({ any }) => {
  const [data, setData] = useState([]);
  const [params] = useSearchParams();
  const query = params.get("query") || "panda";

  useEffect(() => {
    document.title = 'Search Gif🔎🖼️';
  }, []);

  useEffect(() => {
    getGifsList(query).then((data) => {
      setData(data.data);
      // console.log(data)
    });
  }, [query]); //eslint-disable-line

  window.scroll(0, 0);

  // if (window.scrollY > 1500){
  //   getGifsList(query).then((newData) => {
  //     setData([...data, newData]);
  //   });
  //   console.log("yes")
  // }

  return (
    <>
      {/* <HeaderTag tag={"Search"}/> */}
      <div className="search">
        <SearchBar />
        <List array={data}>
          <NavMobile />
        </List>
      </div>
    </>
  );
};

export default Search;
