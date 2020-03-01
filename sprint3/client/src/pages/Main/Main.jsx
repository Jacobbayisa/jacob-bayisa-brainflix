import React, {Component} from 'react';
import CommentDisplay from '../../components/CommentDisplay';
import CommentInput from '../../components/CommentInput';
import CurrentVideo from '../../components/CurrentVideo';
import SideVideo from '../../components/SideVideo';
import Hero from '../../components/Hero';
import './Main.scss';
import axios from 'axios';
 
class Main extends Component {
  state = {
      videos:[],
      mainVideo: {},
      prevPropsId:null
  }
  
  componentDidMount(){
    axios.get("http://localhost:8085")
      .then(res =>{
          this.setState({
              videos: res.data
          })

          this.getComments(res.data) // used to bring the the first comments and mainVideos
      })
  }
  componentDidUpdate(){
    if(this.props.match.params.id !== this.state.prevPropsId){
      axios.get(`http://localhost:8085/comments/${this.props.match.params.id}`)
        .then(result=>{
          this.setState({
            mainVideo: result.data,
            prevPropsId:result.data.id})
          })
          //the code below checks if the home button is clicked and loads comments for main video
          !this.props.match.params.id && this.getComments(this.state.videos);
       }
  }
  
  getComments =(arr)=>{
      axios.get(`http://localhost:8085/comments/${arr[0].id}`)
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
            Object.keys(this.state.mainVideo).length>0 &&<CommentInput id ={this.state.prevPropsId}
              length={(this.state.mainVideo.comments).length}/>
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
                      } else if(video.id===this.state.prevPropsId){
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