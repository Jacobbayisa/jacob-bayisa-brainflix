import React from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Upload from './pages/Upload';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';


function App() {
  return (
      <>
        <Header/>
        <Router>
            <Switch>
              <Route exact path= "/">
                <Hero/>
                <div className="main-container">
                  <Main/>
                  <SideBar/>
                </div>
              </Route>
              <Route path ="/upload"> <Upload/> </Route>
            </Switch>
        </Router>
      </>
    )
    }
    

export default App;
