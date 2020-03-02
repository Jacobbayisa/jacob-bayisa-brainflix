import React from "react";
import "./Hero.scss";
import Video from '../../assets/Video/BrainStationSampleVideo.mp4';

const Hero = (props) => {
    const playVideoHandler = (event) =>{
        event.preventDefault();
        const video = document.querySelector(".hero_video");
        if (video.paused === true)
        {
            video.play();
           
        }
        else
        {
            video.pause();
            
        }
    }
    return(
        <section className ="hero" >
            <video className="hero__video"  poster={props.url}>
                <source src={Video} type="video/mp4"/>
            </video>
            <div className="hero__video-controllers">
                <button className="hero__play" onClick={playVideoHandler}></button>
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