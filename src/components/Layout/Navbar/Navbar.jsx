import React from 'react';
import classes from './Navbar.module.css';
import subscribe from './/subscribe.png';
import logo from './/new1.png';

const Navbar = () => {
    return (
        <div className={classes.container}>
           <nav>
                <ul>
                    <li> <img src={logo} alt="" /></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">File</a></li>
                    <li><a href="/">Share</a></li>
                    <li><a href="/">Comment</a></li>
                    <li>
                        <img src={subscribe} alt="" />
                        <a href="/">Subscribe</a>
                        {/* <button>
                            <img src={subscribe} alt="" />
                            <a href="/">Subscribe</a>
                        </button> */}
                    </li>
                </ul>
           </nav>
        </div>
    );
};

export default Navbar;