import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNowTrending } from "./getNowTrending";
import "./NowTrending.css"

const NowTrending = ({ any }) => {
  const [topics, setTopics] = useState();
  useEffect(() => {
    getNowTrending().then((data) => setTopics(data.splice(0, 6)));
  }, []);
  return (
    <>
      <ul>
        {topics?.map((topic) => (
          <li key={topic}>
            <Link to={`/search?query=${topic}`}>{topic}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NowTrending;
