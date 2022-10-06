import React, { useEffect } from 'react';
import classes from './Body.module.css';
import search from './/search.png';

const Body = (props) => {
    const show = props.show;
    useEffect(()=>{
        const doc = document.getElementsByClassName(classes.container)[0];
        // console.log(doc);
        show ? doc.style.width = "84vw" : doc.style.width = "90vw" 
        
    }, [show])
   
    return (
        <div className={classes.container}>
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button>
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
            <div>
                <iframe title="dashboard - Net Sales" width="100%" height="836" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiMTQ2YTMzNjktMDYzMy00ZDk0LWJlOTMtZTc5
                    ZDMzNzU3YjgwIiwidCI6Ijk2YjI4ZDUwLTIwNTAtNGExYi05NGI2LTAxZTFmYTZiYWUzNCIsImMiOjEwfQ%3D%3D" 
                    frameborder="0" allowFullScreen="true">
                </iframe>
            </div>
            <div>
                <div>
                    <p>div 1</p>
                    <iframe width="100%" height="582rem" src="https://www.youtube.com/embed/mq8LYj6kRyE" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div>
                    <p>div 2</p>
                    <iframe width="100%" height="267rem" src="https://www.youtube.com/embed/rg7Fvvl3taU" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div>
                    <p>div 3</p>
                    <iframe width="100%" height="267rem" src="https://www.youtube.com/embed/rg7Fvvl3taU" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div>
                    <p>div 4</p>
                    <iframe width="100%" height="582rem" src="https://www.youtube.com/embed/mq8LYj6kRyE" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            
        </div>
    );
};

export default Body;