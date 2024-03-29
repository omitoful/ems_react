import React, { useState } from "react";
import TitleSearch from "../components/title_search/TitleSearch";
import "./views_css/ViewsPage.css";

const ValuePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchTapped = () => {
    console.log(searchTerm);
  };

  return (
    <div className="reservation-contianer">
      <TitleSearch
        title="評價管理"
        placeholder="搜尋關鍵字"
        value={searchTerm}
        onChange={handleSearchInputChange}
        tapSearch={handleSearchTapped}
      />
    </div>
  );
};

export default ValuePage;
