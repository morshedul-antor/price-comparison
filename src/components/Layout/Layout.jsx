// import React, { useState } from 'react';
import Body from './Body/Body';
import Navbar from './Navbar/Navbar';
// import Sidebar from './Sidebar/Sidebar';
import classes from './Layout.module.css';

import About from './About/About';

const Layout = () => {
    return (
        <div className={classes.container}>
            <Navbar />
           
            {/* <Sidebar /> */}
            
            <Body />

            <About />
        </div>
    );
};

export default Layout;