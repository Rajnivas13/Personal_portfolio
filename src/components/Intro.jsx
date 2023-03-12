import React from "react";
// import ReactDOM from 'react-dom/client';

export default function Intro(){
    return(
        <div id="Intro" className="container-fluid">
            <div id="Main">
                <span>Hi I'm</span>
                <h1>Rajniv</h1>
                <div id="photo">
                    <img src={process.env.PUBLIC_URL + "/Images/Rajnivas_photo.png" }  alt="Rajnivas.png"/>
                </div>
                
            </div>

        </div>
    )
}