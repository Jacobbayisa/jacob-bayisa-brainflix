import React from 'react';
import "./SideVideo.scss";

const SideVideo = (props) => {
 return (
     <div className ="sideVideo">
        <img  className="sideVideo__img" src = {props.img} />
        <div className="sideVideo__description">
            <h4 className="sideVideo__video-title"> {props.title}</h4>
            <p className="sideVideo__artist"> {props.artist} </p>
        </div>
     </div>
 )
}

export default SideVideo;