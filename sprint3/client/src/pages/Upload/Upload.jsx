import React from 'react'
import './Upload.scss';
import Axios from 'axios';
import uploadImage from "../../assets/Images/Upload-video-preview.jpg"


const Upload = () => {
    const uploadHandler = (event)=>{
        event.preventDefault();
            const video = {
                "title":event.target.title.value,
                "channel":"Jacob gospel Songs",
                "image":uploadImage,
                "description":event.target.description.value,
            }
            
        Axios.post("http://localhost:8085/videos",{video})
            .then(res => {
                console.log("posted Successfully");
                console.log(res);
            })
    }

    return(
        <div className="upload">
            <h1 className="upload__title"> Upload Video </h1>
            <div className="upload__img-cont">
                <label className="upload__label upload__video-label"> VIDEO THUMBNAIL </label>
                <div className="upload__img"> </div>
            </div>
            <form method ="post" onSubmit ={uploadHandler} className="upload__form">
                <div className= "upload__inputs" >
                    <label htmlFor="title" className="upload__label upload__title-label">TITLE YOUR VIDEO</label>
                    <input type="text" name="title" className ="upload__video-title" 
                    placeholder="Add a title to your video"/>
                    <label htmlFor="description" className="upload__label upload__description-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea type="text" name="description" className ="upload__description"
                    placeholder="Add a description of your video"  rows="5"/>
                </div>
                <div className="upload__buttons">
                    <button className="upload__cancel"> CANCEL</button>
                    <button type ="submit" className="upload__publish">PUBLISH</button>
                </div>
            </form>
            
        </div>
    )

}

export  default Upload;