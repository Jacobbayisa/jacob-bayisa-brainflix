import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Main from './Components/Main/Main';
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
      <>
        <Header/>
        <Hero/>
        <div className="main-container">
          <Main />
          <SideBar />
        </div>
      </>
    )
    }
    

export default App;
