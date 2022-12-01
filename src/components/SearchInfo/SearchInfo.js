import React from "react";
import { useSearchParams } from "react-router-dom";
import getEmojiFromText from "../../services/getEmojiFromText";
import "../SearchBar/SearchBar.css";

const SearchInfo = ({ displayInfo = true }) => {
  const [params] = useSearchParams();
  const query = params.get("query") || "panda";

  const emojis = getEmojiFromText(query);
  console.log(query);
  return (
    <>
      {displayInfo ? (
        <h2 className="search-info">
          You just searched: "{query}"{emojis}
        </h2>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchInfo;
