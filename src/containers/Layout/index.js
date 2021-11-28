import React from "react";
import { Footer, Header } from "Containers";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
