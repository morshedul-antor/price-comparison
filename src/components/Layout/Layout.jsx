import React, { useState } from 'react';
import Body from './Body/Body';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import classes from './Layout.module.css';

//import bar from './/bars.png';
import About from './About/About';

const Layout = () => {
    const [show, setShow] = useState(true);
    // const handleButton = () => {
    //     setShow(!show);
    //     console.log(show);
    //  }
    return (
        <div className={classes.container}>
            <Navbar />
           
            <Sidebar show={show} setShow={setShow}/>
            
            <Body show={show} />

            <About show={show} />
        </div>
    );
};

export default Layout;