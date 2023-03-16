import React from "react";

export default function Github(props){
    return(
       <div id="github-list">
         <text id='github-author-name'>{props.name}</text>
         <text id='github-project-details'>{props.details}</text>
         <div id='details'>
            <text id="language-used">HTML 5</text>
            <img src={process.env.PUBLIC_URL + "/Images/Rajnivas_photo.png"} id='github-photo' alt="github-photo"/>
         </div>
       </div>
    )
}