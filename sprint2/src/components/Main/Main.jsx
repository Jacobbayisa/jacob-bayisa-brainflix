import React, {Component} from 'react';
import CommentDisplay from '../CommentDisplay';
import Comments from '../Comments';
import CommentInput from '../CommentInput';
import CurrentVideo from '../CurrentVideo';
import SideVideo from '../SideVideo';
import './Main.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';

const API_KEY = '902fd918-60e5-4203-ba0b-1edfc07f07f4'
const url =
  `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

  
  class Main extends Component {
  state = {
      videos:[],
      comments:[]
  }
  
  componentDidMount(){
    axios.get(url)
      .then(res =>{
          console.log(res.data[0].title);
          console.log(res.data);
          this.setState({
              videos: res.data
          })
         this.getComments(res.data)
      })

    
  }
    
  getComments =(arr)=>{
    for(var x=0;x<arr.length;x++){
      axios.get(`https://project-2-api.herokuapp.com/videos/${arr[x].id}?api_key=${API_KEY}`)
      .then(res=>{
        this.setState({
          comments:res.data.comments
        })
        
      })
    }
    
  }
  render(){
    
    return(
      <div className="main-container">
        <div className="main">
        {
          this.state.videos.map((video,index)=>{
           
            if(index==0){
              return(
                <CurrentVideo
                  key ={this.state.videos[0].id}
                  title={this.state.videos[0].title}
                  artist={this.state.videos[0].title}
                />
              )
            }else{
              return null;
            }
          }) 
        }
       
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
        <div className="sidebar-container">
                <Link to="/Video"><button className="next-video"  >NEXT VIDEO</button> </Link>
                {
                  this.state.videos.map((video,index)=>{
                    if(index==0){
                        return null;
                    } else  {
                    return (
                        <SideVideo
                          key = {video.id}
                          id ={video.id}
                          img = {video.image}
                          title ={video.title}
                          channel={video.channel}
                        />
                    )
                    }
                })
                }
            </div>     
    </div>
  )
  }  
}
                        

export default Main;