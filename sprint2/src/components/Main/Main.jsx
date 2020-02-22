import React from 'react'
import CommentDisplay from '../CommentDisplay';
import Comments from '../Comments';
import CommentInput from '../CommentInput';
import MainVideo from '../MainVideo';
import Videos from '../Videos';
import './Main.scss';



const Main = () => {
    return(
        <div className="main">
        <MainVideo
          key ={Videos.id}
          title={Videos[0].title}
          artist={Videos[0].artist}
        />
        <CommentInput/>
        {
            Comments.map( comment =>{
              return(
                <CommentDisplay
                  key = {comment.id}
                  name = {comment.name}
                  timeStamp = {comment.timeStamp}
                  comment = {comment.comment}
                  
      
                />
              )
            })
          }
          
      </div>
    )
}

export default Main;