import React from 'react'
import CommentDisplay from '../Comments/CommentDisplay';
import Comments from '../Comments/Comments';
import VideoDisplay from '../Sidebar/VideoDisplay';
import Videos from '../Sidebar/Videos';



const Main = () => {
    return(
        <>
        {
            Comments.map( comment =>{
              return(
                <CommentDisplay
                  name = {comment.name}
                  timeStamp = {comment.timeStamp}
                  comment = {comment.comment}
      
                />
              )
            })
          }
           <p className="next-video">NEXT VIDEO</p>
          {
            Videos.map( (video,index) =>{
              if(index===0){
                return null;
              } else {
              return (
                <VideoDisplay 
                  img = {video.img}
                  title ={video.title}
                  artist={video.artist}
                />
              )
              }
            })
          }
      </>
    )
}

export default Main;