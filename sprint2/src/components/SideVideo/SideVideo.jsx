import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./SideVideo.scss";

const SideVideo = (props) =>{
        return (
            <div className ="sideVideo">
               <Link to={`${props.id}`}><img  className="sideVideo__img" src = {props.img} /></Link>
               <div className="sideVideo__description">
                   <h4 className="sideVideo__video-title"> {props.title}</h4>
                   <p className="sideVideo__artist"> {props.channel} </p>
               </div>
            </div>
        )
}

export default SideVideo;