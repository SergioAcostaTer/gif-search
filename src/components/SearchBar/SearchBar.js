import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAutocomplete } from "../../services/getAutocomplete";
import searchIcon from "../../sources/search.svg";
import "./SearchBar.css";

const SearchBar = ({ query }) => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [autocomplete, setAutocomplete] = useState();
  const [showAuto, setShowAuto] = useState(false);
  const [actualInput, setActualInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value !== "") {
      navigate("/search?query=" + input.current.value);
    }
    document.activeElement.blur();
    setShowAuto(false);
  };
  return (
    <>
      <nav className="nav">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-container">
            <input
              onFocus={() => setShowAuto(true)}
              placeholder="Buscar un gif"
              className="input"
              type={"text"}
              ref={input}
              onChange={() => {
                getAutocomplete(input.current.value).then((data) => {
                  setAutocomplete(data);
                });
                setActualInput(input.current.value);
              }}
            />
            <button className="search-button">
              <img src={searchIcon} alt="search button" />
            </button>
          </div>
        </form>
      </nav>
      {showAuto ? (
        <ul className="autocompleted-list">
          {autocomplete?.map((e) => (
            <li key={e}>
              <Link
                className="autocompleted-element"
                to={`/search?query=${e}`}
                onClick={() => {
                  setShowAuto(false);
                  input.current.value = e;
                  setActualInput(input.current.value)
                }}
              >
                <p className="autocompleted-text">
                  <span className="same-text">{e.substring(0, actualInput.length)}</span>
                  {e.substring(actualInput.length, )}
                </p>
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
