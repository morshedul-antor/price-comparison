import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import bars from './/bars.png';
import home from './/home.png';
import dashboard from './/dashboard.png';
import recent from './/recent2.png';
import dataset from './/dataset2.png';
import infographics from './/infographics.png';
import learn from './/learn.png';
import contact from './/contact1.png';

const Sidebar = (props) => {
    // const [show, setShow] = useState(true);
    // const handleButton = () => {
    //     setShow(!show);
    //  }
    const {show, setShow} = props;
    console.log(setShow);
    return (
        <div className={classes.container}>
            <img src={bars} alt="" onClick={()=> setShow(!show)}/>
            {
                show ? <nav>
                    <ul>
                        <li>
                            <img src={home} alt="" />
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <img src={dashboard} alt="" />
                            <a href="/">Dashboard</a>
                        </li>
                        <li>
                            <img src={recent} alt="" />
                            <a href="/">Recent</a>
                        </li>
                        <li>
                            <img src={dataset} alt="" />
                            <a href="/">Datasets</a>
                        </li>
                        <li>
                            <img src={infographics} alt="" />
                            <a href="/">Infographics</a>
                        </li>
                        <li>
                            <img src={learn} alt="" />
                            <a href="/">Learn</a>
                        </li>
                        <li>
                            <img src={contact} alt="" />
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                :
                null
            }
        </div>
    );
};

export default Sidebar;