import React, {Component} from 'react';
import "./SideVideo.scss";

class SideVideo extends Component {
   
    render(){
        return (
            <div className ="sideVideo">
               <img  className="sideVideo__img" src = {this.props.img} />
               <div className="sideVideo__description">
                   <h4 className="sideVideo__video-title"> {this.props.title}</h4>
                   <p className="sideVideo__artist"> {this.props.channel} </p>
               </div>
            </div>
        )
    }
}

export default SideVideo;