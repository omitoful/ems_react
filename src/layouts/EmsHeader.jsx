import React, { useState } from "react";
import "./EmsHeader.css";
import HeaderCell from "../components/HeaderCell";
import { Link } from "react-router-dom";

function EmsHeader() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectHeaderHandler = (index) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };

  const titleTapped = () => {
    setSelectedIndex(null);
  };

  const headerList = [
    { title: "公布欄", isRead: false, path: "notice_board" },
    { title: "預約行事曆", isRead: false, path: "calendar" },
    { title: "預約列表", isRead: false, path: "reservation" },
    { title: "健檢作業照會", isRead: false, path: "work" },
    { title: "機構評價", isRead: false, path: "value" },
  ];
  return (
    <div className="header-container">
      <div className="header-left">
        <Link className="header-link" onClick={titleTapped} to="/">
          醫聯網EMS系統後台
        </Link>
        <div className="header-btns">
          {headerList.map((cell, index) => (
            <HeaderCell
              key={index}
              text={cell.title}
              isRead={index === selectedIndex ? true : cell.isRead}
              index={index}
              isSelected={index === selectedIndex}
              onSelect={selectHeaderHandler}
              path={cell.path}
            />
          ))}
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <p>機構管理者</p>
          <p>meg.wu@medicrowd.com.tw</p>
        </div>
        <button>登出</button>
      </div>
    </div>
  );
}

export default EmsHeader;
