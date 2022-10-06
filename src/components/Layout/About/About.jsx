import React, { useEffect } from 'react';
import classes from './About.module.css';

const About = (props) => {
    const show = props.show;
    useEffect(()=>{
        const doc = document.getElementsByClassName(classes.container)[0];
        // console.log(doc);
        show ? doc.style.width = "84vw" : doc.style.width = "90vw" 
    }, [show])

    return (
        <div className={classes.container}>
            <h1>Hello this is ABOUT !</h1>
            <div>
                <div>
                    <p>div 1</p>
                    <iframe width="100%" height="300rem" id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map">
                    </iframe>
                </div>
                <div>
                    <p>div 2</p>
                    <iframe width="100%" height="650rem" id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map1">
                    </iframe>
                </div>
                <div>
                    <p>div 3</p>
                    <iframe width="100%" height="300rem" id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=bavaria&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map3">
                        </iframe>
                </div>
                <div>
                    <p>div 4</p>
                    <iframe width="100%" height="300rem" id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=corcica&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map2">
                    </iframe>
                </div>
                <div>
                    <p>div 5</p>
                    <iframe width="100%" height="540rem" id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=erlangen&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map4">
                    </iframe>
                </div>
                <div>
                    <p>div 6</p>
                    <iframe width="100%" height="410rem" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=hanover&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='map5'>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default About;