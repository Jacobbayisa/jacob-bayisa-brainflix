import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import CurrentVideo from './Components/Main/CurrentVideo';
import CommentInput from  './Components/Comments/CommentInput';
import Main from './Components/Main/Main';
import Videos from './Components/Sidebar/Videos';

function App() {
  return (
      <>
        <Header/>
        <Hero/>
        <CurrentVideo
                  title={Videos[0].title}
                  artist={Videos[0].artist}
                />
        <CommentInput/>
        <Main />
      </>
    )
    }
    

export default App;
