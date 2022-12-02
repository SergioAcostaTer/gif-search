import React, { useEffect, useState } from "react";
import NowTrending from "../components/NowTrending/NowTrending";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { getTrending } from "../services/getTrending";
import Categories from "../components/Categories/Categories";
import NavMobile from "../components/NavMobile/NavMobile";
const Main = ({ any }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending().then((data) => {
      setData(data.data);
      // console.log(data.data)
    });
  }, []); //eslint-disable-line

  return (
    <>
      <div className="main">
        <SearchBar displayInfo={false} />
        <NowTrending background={true}/>
        <Categories />
        {/* <List array={data} /> */}
        <List array={data}>
          <NavMobile  />
        </List>
        <div style={{height: "20vh"}}></div>
        
      </div>
    </>
  );
};

export default Main;