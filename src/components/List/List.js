import React from "react";
import Image from "../Image/Image";
import "./List.css";
// import sample from "../../sources/sample.gif";

const List = ({ array = [], children }) => {
  // const object = { id: "xd"), images: { original: { url: sample } }, title: "Best cat🐱", trending_datetime : "2023" };
  // const data = Array(25).fill(object)
  // console.log(array)
  return (
    <>
      <div className="list">
        {array.map((gif) => (
          <Image
            save={gif}
            uri={gif?.images?.preview.mp4}
            key={gif?.id}
            alt={gif?.title}
            date={gif?.trending_datetime}
          />
        ))}
      </div>
      {children}
    </>
  );
};

export default List;
