import React from 'react';
import './CommentInput.scss';

const CommentInputer= (props) =>{
   
    return(
        <section className ="comment-section">
            <h1 className="comment-section__header"> {props.length} comments </h1>
            <div className="comment-section__image"></div>
            <form className="comment-section__form" action="post">
                <label htmlFor="comment">JOIN THE CONVERSATION </label>
                <textarea  className="comment-section__comment" name="comment" id="" cols="30" rows="4"
                placeholder="That was easily the most spectacular BMX moment ever." required></textarea>
                <button className="comment-section__submit" type ="submit">COMMENT </button>
            </form>
        </section>
    )
};

export default CommentInputer;