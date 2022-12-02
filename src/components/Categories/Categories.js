import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/geCategories";

import getEmojiFromText from "../../services/getEmojiFromText";
import "./Categories.css";
const Categories = ({ any }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setData(data.splice(0, 8)));
  }, []);
  return (
    <>
      <ul className="category-list">
        {data.map((category) => (
          <li className="category-list-element">
            <Link
              className="category-list-element-a"
              to={`/search?query=${category.name}`}
            >
              {category.name}
              {getEmojiFromText(category.name)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
