import React from 'react'
import './Upload.scss';

const App = () => {
    return(
        <div className="upload">
            <h1 className="upload__title"> Upload Video </h1>
            <div className="upload__img-cont">
                <label className="upload__label upload__video-label"> VIDEO THUMBNAIL </label>
                <div className="upload__img"> </div>
            </div>
            <form className="upload__form">
                <label htmlFor="title" className="upload__label upload__title-label">TITLE YOUR VIDEO</label>
                <input type="text" name="title" className ="upload__video-title" 
                placeholder="Add a title to your video"/>
                <label htmlFor="title" className="upload__label upload__description-label">ADD A VIDEO DESCRIPTION</label>
                <textarea type="text" name="title" class ="upload__description"
                placeholder="Add a description of your video"  rows="5"/>
            </form>
            <div className="upload__buttons">
                <button className="upload__cancel"> CANCEL</button>
                <button className="upload__publish">PUBLISH</button>
            </div>
        </div>
    )

}

export  default App;