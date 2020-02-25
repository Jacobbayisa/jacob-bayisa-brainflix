import React from 'react';
import './CurrentVideo.scss'
import viewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import likeIcon from '../../assets/Icons/SVG/Icon-likes.svg'


const CurrentVideo = (props) => {

    let date = new Date(props.timestamp)
    let month = date.getUTCMonth() + 1; //months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    let convertedDate = month + "/" + day + "/" + year;
    
    return (
        <div className ="current-video">
            <h2 className="current-video__title">{props.title}</h2>
            <div className="current-video__artist-time-cont">
                <p className = "current-video__artist"> By {" " + props.artist}</p>
                <p className = "current-video__date-stamp"> {convertedDate} </p>
            </div>
            <div className="current-video__view-section">
                <img className ="current-video__views-icon" src ={viewIcon}></img>
                <p className="current-video__views-count"> {props.views} </p>
                <img className="current-video__likes-icon" src ={likeIcon}/>
                <p className ="current-video__likes-count">{props.likes}</p>
            </div>

            <p className ="current-video__description">{props.description}</p>

        </div>
    )
}

export default CurrentVideo;