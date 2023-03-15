import React from "react";

export default function Tech(props){
    // if(props.percentage )

    
    return(
        
            
                <div id="tech-stacks" >
                    <div className="item row">
                            <div className="col-md-3">
                                <div id="tech-stack-name">
                                    <img src={process.env.PUBLIC_URL + `/Images/${props.img}`} alt="Nodejs"/>
                                    <text id="text-stack-name">{props.stack}</text>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div id="tech-stack-chart">
                                    <div id="tech-chart-for-every-stack">
                                        <div id="percentage"></div>
                                    </div>
                                    <text id="tech-stack-percentage">{props.percentage}</text>
                                </div>
                            </div>   
                    </div>
                </div>
    )
}

// function relation(){

// }