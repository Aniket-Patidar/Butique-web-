import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="mx-auto py-[20px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
