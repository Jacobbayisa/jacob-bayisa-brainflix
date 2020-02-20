import React from 'react';
import VideoDisplay from './VideoDisplay';
import Videos from './Videos';
import './SideBar.scss';

const SideBar = () =>{
    return(
        <div className="sidebar-container">
             <p className="next-video">NEXT VIDEO</p>
            {
                Videos.map( (video,index) =>{
                if(index===0){
                   return null;
                } else {
                return (
                    <VideoDisplay 
                    key = {video.id}
                    img = {video.img}
                    title ={video.title}
                    artist={video.artist}
                    />
                )
                }
                })
            }
        </div>
    )
}

export default SideBar;