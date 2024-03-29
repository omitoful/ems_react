import React from "react";
import { Outlet } from "react-router-dom";
import EmsHeader from "./EmsHeader";

const Layout = () => {
  return (
    <>
      <EmsHeader />
      <div className="layout">
        <Outlet /> {/* this css write inside EmsHeader.css */}
      </div>
    </>
  );
};

export default Layout;
