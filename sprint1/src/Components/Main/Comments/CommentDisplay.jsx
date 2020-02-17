import React from 'react';
import './CommentDisplay.scss';



const CommentDisplay = (props) =>{
    return (
        <div className ="comment-display">
            <img className="comment-display__image-icon"/>
            <div className ="comment-display__name-comment-cont">
                <h3 className ="comment-display__name">  {props.name}</h3>
                <p className="comment-display__time">{props.timeStamp} </p>
                <p className="comment-display__comment">{props.comment} </p>

            </div>
        </div>
    )
}

export default CommentDisplay;
