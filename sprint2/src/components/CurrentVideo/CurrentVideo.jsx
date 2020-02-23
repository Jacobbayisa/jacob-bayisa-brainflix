import React from 'react';
import Videos from '../Videos';
import './CurrentVideo.scss'
import viewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import likeIcon from '../../assets/Icons/SVG/Icon-likes.svg'


const CurrentVideo = (props) => {
    return (
        <div className ="current-video">
            <h2 className="current-video__title">{props.title}</h2>
            <div className="current-video__artist-time-cont">
                <p className = "current-video__artist"> By {" " + props.artist}</p>
                <p className = "current-video__date-stamp"> 12/18/2018 </p>
            </div>
            <div className="current-video__view-section">
                <img className ="current-video__views-icon" src ={viewIcon}></img>
                <p className="current-video__views-count"> 1,001,023 </p>
                <img className="current-video__likes-icon" src ={likeIcon}></img>
                <p className ="current-video__likes-count">110,985</p>
            </div>

            <p className ="current-video__description">
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what is
                possible on two wheels, unleashing some of the
                biggest moments the sport has ever seen. While
                mother nature only allowed for one full run before
                the conditions made it impossible to ride, that was
                all that was needed for event veteran Kyle Strait,
                who won the event for the second time -- eight years
                after his first Red Cow Rampage title
            </p>

        </div>
    )
}

export default CurrentVideo;