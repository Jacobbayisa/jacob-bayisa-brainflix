import React from "react";
import "./Hero.scss";

const Hero = () => {
    return(
        <section className ="hero" >
            <div className ="hero__video">
                <button className="hero__play"></button>
                <video controls src="" className="hero__video-player"/>
                <div className="hero__audio-cont">
                    <button className="hero__full-screen"></button>
                    <button className="hero__volume"> </button>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;