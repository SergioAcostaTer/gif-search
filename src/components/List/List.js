import React from "react";
import Image from "../Image/Image";
import "./List.css";

const List = ({ array = [] }) => {
  return (
    <>
      <div className="list">
        {array.map((gif) => (
          <Image
            uri={gif?.images.original.url}
            key={gif?.id}
            alt={gif?.title}
            date={gif?.trending_datetime}
          />
        ))}
      </div>
    </>
  );
};

export default List;
