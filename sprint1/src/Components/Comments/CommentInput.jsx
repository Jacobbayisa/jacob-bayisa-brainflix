import React from 'react';
import './CommentInput.scss';

const CommentInputer= () =>{
    return(
        <section className ="comment-section">
            <h1 className="comment-section__header">comments </h1>
            <div className="comment-section__image"></div>
            <form className="comment-section__form" action="post">
                <label htmlFor="comment">Join the Conversation </label>
                <textarea className="comment" name="comment" id="" cols="30" rows="4"
                placeholder="Add a new comment" required></textarea>
                <button className="comment-section__submit" type ="submit">COMMENT </button>
            </form>
        </section>
    )
};

export default CommentInputer;