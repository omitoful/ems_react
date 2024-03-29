import React, { useState } from "react";
import TitleSearch from "../components/title_search/TitleSearch";
import "./views_css/ViewsPage.css";

const ReservationPage = () => {
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
        title="預約列表"
        placeholder="搜尋關鍵字"
        value={searchTerm}
        onChange={handleSearchInputChange}
        tapSearch={handleSearchTapped}
      />
    </div>
  );
};

export default ReservationPage;
