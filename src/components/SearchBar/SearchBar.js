import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAutocomplete } from "../../services/getAutocomplete";
import searchIcon from "../../sources/search.svg";
import arrowIcon from "../../sources/arrow-left.svg"
import Preview from "../Preview/Preview";
import "./SearchBar.css";

const SearchBar = ({ query }) => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [autocomplete, setAutocomplete] = useState();
  const [showAuto, setShowAuto] = useState(false);
  const [actualInput, setActualInput] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actualInput !== "") {
      navigate("/search?query=" + input.current.value);
    }
    document.activeElement.blur();
    setShowAuto(false);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await getPreview(autocomplete);
  //     setPrev(res);
  //   }
  //   fetchData();
  // }, [actualInput]);

  useEffect(() => {
    getAutocomplete(actualInput).then((data) => {
      setAutocomplete(data);
    });
    // console.log("setCompleted", autocomplete)
  }, [actualInput]);

  
  const handleOnChange = (e) => {
    e.preventDefault();
    setActualInput(e.target.value);
    // console.log(e.target.value, actualInput)
    value = e.target.value
  };

  // useEffect(()=> (
  //   getPreview("messi").then(data => console.log(data?.data[0].images.preview_gif.url))
  // ), [])

  return (
    <>
      <nav className="nav">
        <button>

        </button>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-container">
            <input
              onFocus={() => setShowAuto(true)}
              placeholder="Buscar un gif"
              className="input"
              type={"text"}
              ref={input}
              onChange={handleOnChange}
            />
            <button className="search-button">
              <img src={searchIcon} alt="search button" />
            </button>
          </div>
        </form>
      </nav>
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
                <Preview query={e}/>
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
