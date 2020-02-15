import React from 'react';
import './App.css';
import CommentInput from  './Components/Comments/CommentInput';
import CommentDisplay from './Components/Comments/CommentDisplay';
import Videos from './Components/Sidebar/Videos';

function App() {
  return (
    <>
    <CommentInput/>
    <CommentDisplay/>
    <img src={Videos[3].img}/>
    <div > {Videos[1].title} </div>
    </>
  )
}

export default App;
