import React from 'react';
import "./VideoDisplay.scss";

const VideoDisplayer = (props) => {
 return (
     <div className ="sidebar">
        <img  className="sidebar__img" src = {props.img} />
        <div className="sidebar__description">
            <h4 className="sidebar__video-title"> {props.title}</h4>
            <p className="sidebar__artist"> {props.artist} </p>
        </div>
     </div>
 )
}

export default VideoDisplayer;