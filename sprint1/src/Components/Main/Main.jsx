import React from 'react'
import CommentDisplay from './Comments/CommentDisplay';
import Comments from './Comments/Comments';
import CommentInput from './Comments/CommentInput';
import CurrentVideo from './CurrentVideo';
import Videos from '../SideBar/Videos';
import './Main.scss';



const Main = () => {
    return(
        <div className="main">
        <CurrentVideo
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