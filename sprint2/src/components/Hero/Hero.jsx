import React from "react";
import "./Hero.scss";
import Video from '../../assets/Video/BrainStationSampleVideo.mp4';
import Poster from '../../assets/Images/video-list-0.jpg'

const Hero = (props) => {
    return(
        <section className ="hero" >
            <video className="hero__video"  poster={props.url}>
                <source src={Video} type="video/mp4"/>
            </video>
            <div className="hero__video-controllers">
                <button className="hero__play"></button>
                <div className="hero__scrabber-cont">
                    <div className="hero__scrabber"></div>
                </div>
                <div className="hero__audio-cont">
                        <button className="hero__full-screen"></button>
                        <button className="hero__volume"> </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;