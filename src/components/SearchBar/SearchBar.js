import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getAutocomplete } from "../../services/getAutocomplete";
import searchIcon from "../../sources/search.svg";
import arrowIcon from "../../sources/arrow-left.svg";
import xIcon from "../../sources/x.svg";
import Preview from "../Preview/Preview";
import "./SearchBar.css";
import SearchInfo from "../SearchInfo/SearchInfo";

const SearchBar = ({ query, displayInfo }) => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [autocomplete, setAutocomplete] = useState();
  const [showAuto, setShowAuto] = useState(false);
  const [actualInput, setActualInput] = useState("");
  const [toggleSearch, setToggleSearch] = useState(true);

  const [params] = useSearchParams();
  const queryRefresh = params.get("query") || "";

  useEffect(() => {
    input.current.value = queryRefresh;
  }, []); //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actualInput !== "") {
      navigate("/search?query=" + input.current.value);
    }
    document.activeElement.blur();
    setShowAuto(false);
  };

  useEffect(() => {
    getAutocomplete(actualInput).then((data) => {
      setAutocomplete(data);
    });
  }, [actualInput]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setActualInput(e.target.value);
  };

  return (
    <>
      <nav className="nav">
        <button
          className="back noSelect"
          style={{ display: !showAuto ? "none" : "block" }}
          onClick={() => setShowAuto(false)}
        >
          <img src={arrowIcon} alt="back button" />
        </button>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-container">
            <input
              onFocus={() => {
                setShowAuto(true);
                setToggleSearch(false);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setShowAuto(false);
                  setToggleSearch(true);
                  // input.current.focus()
                }, 500);
              }}
              placeholder="Buscar un gif"
              className="input"
              type={"text"}
              ref={input}
              onChange={handleOnChange}
            />
            {toggleSearch ? (
              <button className="search-button noSelect">
                <img src={searchIcon} alt="search button" />
              </button>
            ) : (
              <div
                style={{ zIndex: 1000 }}
                className="search-button noSelect"
                onClick={() => {
                  input.current.value = "";
                  setActualInput("")
                }}
              >
                <img src={xIcon} alt="search button" />
              </div>
            )}
          </div>
        </form>
      </nav>
      <SearchInfo displayInfo={displayInfo} />
      {showAuto ? (
        <ul className="autocompleted-list">
          {autocomplete?.map((e, index) => (
            <li key={e}>
              <Link
                className="autocompleted-element"
                to={`/search?query=${e}`}
                onClick={() => {
                  setShowAuto(false);
                  input.current.value = e;
                  setActualInput(input.current.value);
                }}
              >
                <p className="autocompleted-text">
                  <span className="same-text">
                    {e.substring(0, actualInput.length)}
                  </span>
                  {e.substring(actualInput.length)}
                </p>
                <Preview query={e} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchBar;
