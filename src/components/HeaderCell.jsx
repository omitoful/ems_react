import React from "react";
import "./HeaderCell.css";
import { Link } from "react-router-dom";

const HeaderCell = ({ text, isRead, index, isSelected, onSelect, path }) => {
  const selectionHandler = () => {
    onSelect(index);
  };

  return (
    <div onClick={selectionHandler} className="header-cell">
      <Link
        className={`header-cell-link ${isSelected ? "selected" : ""}`}
        to={`/${path}`}
      >
        <div className="header-cell-text">{text}</div>
        {!isRead && <div className="header-cell-dot"></div>}
      </Link>
    </div>
  );
};

export default HeaderCell;
