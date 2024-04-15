import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="mx-auto py-[20px]">{children}</div>
    </div>
  );
};

export default Layout;
