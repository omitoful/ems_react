import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./TitleSearch.css";

const TitleSearch = ({ title, placeholder, value, onChange, tapSearch }) => {
  return (
    <div className="title-search">
      <p>{title}</p>
      <div className="title-search-input">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={tapSearch}
          className="title-search-icon"
        />
      </div>
    </div>
  );
};

export default TitleSearch;
