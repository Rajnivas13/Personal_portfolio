import React from "react";
// import ReactDOM from 'react-dom/client';

export default function Intro(){
    return(
        <div id="Intro" >
            <div id="Main">
                <div id="content">
                    <div id="content-text">
                        <span>Hi I'm</span>
                        <h1>Rajnivas<br></br> Thiyagarajan</h1>
                        <span>I am a full stack<br></br>webdeveloper &<br></br>Designer</span>
                    </div>
                    <div id="photo">
                        <img src={process.env.PUBLIC_URL + "/Images/Rajnivas_photo.png" }  alt="Rajnivas.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}