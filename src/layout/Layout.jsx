import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
