import React, { useEffect, useRef, useState } from "react";
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
  const [offset, setOffset] = useState(0);
  const [re, setRe] = useState(true);
  const ref = useRef()

  useEffect(() => {
    document.title = "Search Gif🔎🖼️";
  }, []);


  window.onscroll = () => {
    if (
      window.pageYOffset + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setRe(!re);
    }
  };
  useEffect(() => {
    getGifsList(query, 5, offset).then((data) => {
      if (offset === 0) {
        setData(data.data);
      } else {
        setData((old) => [...old, ...data.data]);
      }
      setOffset(offset + 5);
      // console.log(datas ? datas : "", offset);
      // console.log(data, offset);
    });
  }, [re]); //eslint-disable-line

  useEffect(() => {
    window.scroll(0, 0);

    getGifsList(query).then((data) => {
      setData(data.data);
      // console.log(data)
    });
  }, [query]); //eslint-disable-line

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
        <List array={data} ref={ref}/>
        <NavMobile />
      </div>
    </>
  );
};

export default Search;
