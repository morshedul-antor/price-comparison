import React from "react";
import classes from "./Navbar.module.css";
import subscribe from "./subscribe.png";
import logo from "./logo-cropped.png";

const Navbar = () => {
  return (
    <div className={classes.container}>
        <div><img src={logo} alt="" /></div>
        <div>
          <a href="/">About</a>

          <a href="/">File</a>

          <a href="/">Share</a>

          <a href="/">Comment</a>

        </div>
        <div>
          <img src={subscribe} alt="" /><span>
          <a href="/">Subscribe</a></span>
        </div>
    </div>
  );
};

export default Navbar;
