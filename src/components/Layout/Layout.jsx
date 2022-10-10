import React from "react";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      {/* <Sidebar show={show} setShow={setShow}/> */}
      <Body />
      {/* <About /> */}
    </div>
  );
};

export default Layout;
