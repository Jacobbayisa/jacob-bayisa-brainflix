import React from 'react';
import Videos from '../Sidebar/Videos';
import './CurrentVideo.scss'
import viewIcon from '../../Assets/Icons/SVG/Icon-views.svg'
import likeIcon from '../../Assets/Icons/SVG/Icon-likes.svg'


const CurrentVideo = (props) => {
    return (
        <div className ="current-video">
            <h2 className="title">{props.title}</h2>
            <div className="artist-container">
                <p className = "artist"> By {" " + props.artist}</p>
                <p className = "date-stamp"> 12/18/2018 </p>
            </div>
            <div className="view-section">
                <img className ="views-icon" src ={viewIcon}></img>
                <p className="views-count"> 1,001,023 </p>
                <img className="likes-icon" src ={likeIcon}></img>
                <p className ="likes-count">110,985</p>
            </div>

            <p className ="description">
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