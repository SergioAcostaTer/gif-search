import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNowTrending } from "../../services/getNowTrending";
import "./NowTrending.css";
import getEmojiFromText from "../../services/getEmojiFromText";
import Background from "../Background/Background";
import clockwiseIcon from "../../sources/clockwise.svg"

const NowTrending = ({ background = false }) => {
  const [topics, setTopics] = useState([]);
  const [time, setTime] = useState("");
  const [rotate, setRotate] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getNowTrending().then((data) => setTopics(data.splice(0, 6)));
    setTime(new Date().toISOString());
    setIsloading(false);
    setTimeout(() => setRotate(""), 2000);
  }, [rotate]);

  function handleRefresh() {
    setRotate("rotate");
  }

  return (
    <>
      <div className="trending">
        <div>
          <h2 className="trending-title">
            Trending Topics{getEmojiFromText("trend fire")}
          </h2>
          <div className="trending-refresh">
            <p>
              (Updated on <span>{time?.substring(8, 10)}</span>/
              <span>{time?.substring(5, 7)}</span> at{" "}
              <span>{time?.substring(11, 19)}</span>
              {getEmojiFromText("time clock")})
            </p>
            <button onClick={handleRefresh} className="noSelect">
              {/* <p className={rotate}>{clockwiseIcon}</p> */}
              <img className={`${rotate} noSelect`} src={clockwiseIcon} alt={"clockwise arrow"}/>
            </button>
          </div>
        </div>
        {!isLoading ? (
          <ul className="trending-list">
            {topics?.map((topic) => (
              <li key={topic} className="trending-element">
                <Link
                  className="trending-element-a"
                  to={`/search?query=${topic}`}
                  style={{backgroundColor: background ? "transparent" : "", color: background ? "white" : ""}}
                >
                  {topic}
                  {getEmojiFromText(topic)}
                  {background ? <Background topic={topic}/> : ""}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NowTrending;
