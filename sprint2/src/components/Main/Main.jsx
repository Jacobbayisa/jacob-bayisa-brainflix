import React, {Component} from 'react';
import CommentDisplay from '../CommentDisplay';
import Comments from '../Comments';
import CommentInput from '../CommentInput';
import CurrentVideo from '../CurrentVideo';
import Videos from '../Videos';
import './Main.scss';
import axios from 'axios';
import {count} from '../SideBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Axios from 'axios';

const API_KEY = '902fd918-60e5-4203-ba0b-1edfc07f07f4'
const url =
  `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

  
  class Main extends Component {
  state = {
      videos:[]
  }

  componentDidMount(){
      axios.get(url)
          .then(res =>{
              console.log(res.data[0].title);
              this.setState({
                  videos: res.data
              })
          })
  }
  render(){
    return(
      <div className="main">
      <CurrentVideo
        key ={Videos[0].id}
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
    
}

export default Main;