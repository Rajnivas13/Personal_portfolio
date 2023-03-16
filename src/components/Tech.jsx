import React from "react";
// import App from "../App";
import App from '../App.css';

export default function Tech(props){
    let percent = (props.percentage).toString();
    let shrinkpercent = percent.slice(0, -1); 
    let anotherpercent = 755 - shrinkpercent;
    const x = (shrinkpercent/100)*anotherpercent;
    const style={
        position: 'absolute',
        left: '1px',
        top: '1px',
        right: `${x}px`,
        bottom: '1px',
        background: 'linear-gradient(45deg, #FFC400 0%, #E04700 100%)',
    }
    
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
                                <div id="percentage" style={style}></div>
                            </div>
                            <text id="tech-stack-percentage">{props.percentage}</text>
                        </div>
                    </div>   
            </div>
        </div>
    )
}
