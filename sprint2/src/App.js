import React from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import SideBar from './components/SideBar';


function App() {
  return (
      <>
        <Header/>
        <Hero/>
        <div className="main-container">
        <Main/>
        <SideBar/>
          
        </div>
      </>
    )
    }
    

export default App;
