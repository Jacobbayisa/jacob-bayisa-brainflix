import React, {Component,useState} from 'react';
import SideVideo from '../SideVideo';
import Videos from '../Videos';
import './SideBar.scss';
import videos from '../Videos';
import Axios from 'axios';

const API_KEY = '902fd918-60e5-4203-ba0b-1edfc07f07f4'
const url =
  `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;


 class SideBar extends Component{
     state = {
         videos:[]
     }

     componentDidMount(){
         Axios.get(url)
            .then(res=>{
                this.setState({videos:res.data })
            })
     }

   // const [count,setCount] = this.useState(0);

    // function nextHandler(){
    //     if(count<videos.length){
    //        setCount(count + 1);
    //        console.log(count);
    //     }   
    // }

    render(){
        const Videos = this.state.videos.map((video,index)=>{
            if(index==0){
                return null;
            } else  {
            return (
                <SideVideo
                key = {video.id}
                img = {video.image}
                title ={video.title}
                channel={video.channel}
                />
            )
            }
        })
        return(
            <div className="sidebar-container">
                <p className="next-video" >NEXT VIDEO</p>
                {Videos}
                {/* {
                Videos.map( (video,index) =>{
                    if(index==count){
                        return null;
                    } else if(index>count) {
                    return (
                        <SideVideo
                        key = {video.id}
                        img = {video.img}
                        title ={video.title}
                        artist={video.artist}
                        />
                    )
                }
                })
                } */}
            </div>
        )
    }
     
}

export default SideBar;