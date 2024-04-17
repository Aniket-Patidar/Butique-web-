import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="mx-auto max-w-screen-lg py-[20px]">{children}</div>
    </div>
  );
};

export default Layout;
