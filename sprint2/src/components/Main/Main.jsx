import React, {Component} from 'react';
import CommentDisplay from '../CommentDisplay';
import CommentInput from '../CommentInput';
import CurrentVideo from '../CurrentVideo';
import SideVideo from '../SideVideo';
import Hero from '../Hero';
import './Main.scss';
import axios from 'axios';

const API_KEY = '902fd918-60e5-4203-ba0b-1edfc07f07f4'
const url =
  `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

  
class Main extends Component {
  state = {
      videos:[],
      mainVideo: {},
      prevPropsId:null
  }
  
  componentDidMount(){
    axios.get(url)
      .then(res =>{
          this.setState({
              videos: res.data
          })

          this.getComments(res.data)
      })
  }
  componentDidUpdate(){
    if(this.props.match.params.id != this.state.prevPropsId){
    axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${API_KEY}`)
      .then(result=>{
        this.setState({
          mainVideo: result.data,
          prevPropsId:result.data.id})
        })
      }
  }
  
  getComments =(arr)=>{
      axios.get(`https://project-2-api.herokuapp.com/videos/${arr[0].id}?api_key=${API_KEY}`)
      .then(res=>{
        this.setState({mainVideo: res.data})
        })
  }
  render(){
    return(
      <>
        {
          Object.keys(this.state.mainVideo).length>0 && <Hero url={this.state.mainVideo.image}/>
        }
        <div className="main-container">
          <div className="main">
          {
            Object.keys(this.state.mainVideo).length>0 &&
                <CurrentVideo
                  key ={this.state.mainVideo.id}
                  title={this.state.mainVideo.title}
                  artist={this.state.mainVideo.channel}
                  views={this.state.mainVideo.views}
                  likes={this.state.mainVideo.likes}
                  timestamp={this.state.mainVideo.timestamp}
                  comments={this.state.mainVideo.comments[0].comments}
                  description={this.state.mainVideo.description}
              />
          }
          {
            Object.keys(this.state.mainVideo).length>0 &&<CommentInput length={(this.state.mainVideo.comments).length}/>
          }
          {
            Object.keys(this.state.mainVideo).length>0 &&
            this.state.mainVideo.comments.map((comment)=>{
              return(
                <CommentDisplay
                  key ={comment.id}
                  name={comment.name}
                  timestamp={comment.timestamp}
                  comment={comment.comment}
                />
              )
          })
          }
          </div>
          <div className="sidebar-container">
                  <button className="next-video"  >NEXT VIDEO</button>
                  {
                    this.state.videos.map((video,index)=>{
                      if((!this.state.prevPropsId)&& index===0){
                        return null
                      } else if(video.id==this.state.prevPropsId){
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
    </>
  )}  
}
export default Main;