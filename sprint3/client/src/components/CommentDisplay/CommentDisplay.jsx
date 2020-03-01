import React from 'react';
import './CommentDisplay.scss';



const CommentDisplay = (props) =>{
    let date = new Date(props.timestamp)
    let month = date.getUTCMonth() + 1; //months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    let convertedDate = month + "/" + day + "/" + year;
    return (
        <div className ="comment-display" >
            <div   className="comment-display__image-icon"> </div>
            <div className ="comment-display__name-comment-cont" >
                <h3 className ="comment-display__name " >  {props.name}</h3>
                <p className="comment-display__time" >{convertedDate} </p>
                <p className="comment-display__comment " >{props.comment} </p>

            </div>
        </div>
    )
}

export default CommentDisplay;
