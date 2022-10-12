import React from "react";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <Body />
    </div>
  );
};

export default Layout;
