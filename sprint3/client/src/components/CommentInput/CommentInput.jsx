import React, {Component} from 'react';
import './CommentInput.scss';
import Axios from 'axios';

class CommentInputer extends Component {

     commentSubmitHandler = (event) =>{
        event.preventDefault();
        const newComment = event.target.comment.value;
        Axios.post(`http://localhost:8085/comments/${this.props.id}`,
        {
           name:"Jacob Bayisa", comment:newComment
        })
        .then(res => {
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })
    }
   render(){
    return(
        <section className ="comment-section">
            <h1 className="comment-section__header"> {this.props.length} comments </h1>
            <div className="comment-section__image"></div>
            <form className="comment-section__form" onSubmit={this.commentSubmitHandler} action="post">
                <label htmlFor="comment">JOIN THE CONVERSATION </label>
                <textarea  className="comment-section__comment" name="comment" id="" cols="30" rows="4"
                placeholder="That was easily the most spectacular BMX moment ever." required></textarea>
                <button className="comment-section__submit" type ="submit">COMMENT </button>
            </form>
        </section>
    )
};

   }
    
export default CommentInputer;