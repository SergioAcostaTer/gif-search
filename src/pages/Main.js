import React, { useEffect, useState } from "react";
import NowTrending from "../components/NowTrending/NowTrending";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { getTrending } from "../services/getTrending";
// import Categories from "../components/Categories/Categories";
import NavMobile from "../components/NavMobile/NavMobile";
const Main = ({ any }) => {
  const [datas, setData] = useState([]);
  const [re, setRe] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    document.title = "easyGif | A easy gif finder.";
  }, []);

  window.onscroll = () => {
    // console.log(
    //   parseInt(window.pageYOffset + window.innerHeight),
    //   parseInt(document.documentElement.scrollHeight)
    // );

    if (
      parseInt(window.pageYOffset + window.innerHeight) >=
      parseInt(document.documentElement.scrollHeight - 1)
    ) {
      console.log("push");
      setRe(!re);
    }
  };
  useEffect(() => {
    getTrending(5, offset).then((data) => {
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

  return (
    <>
      <div className="main">
        <SearchBar displayInfo={false} />
        {/* <button onClick={() => setRe(!re)}>MORE</button> */}
        <NowTrending background={true} />
        {/* <Categories /> */}
        {/* <List array={data} /> */}
        <List array={datas}></List>
        <NavMobile />
        {/* <div style={{height: "20vh"}}></div> */}
      </div>
    </>
  );
};

export default Main;
