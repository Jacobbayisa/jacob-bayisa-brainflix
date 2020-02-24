import React ,{Component} from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Upload from './pages/Upload';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const API_KEY = '902fd918-60e5-4203-ba0b-1edfc07f07f4'

const HomePage = ({match}) => {
  return(
    <>
    <Hero/>
    <Main/>
    </>
  )
}
const UploadPage = ({match}) =>{
  return (
    <Upload/>
  )
}

class App extends Component {
  render(){
    return (
      <>
        <Router>
          <Header/>
            <Switch>
              <Route exact path= "/" component={HomePage}/>
              <Route path="/Upload" component={UploadPage}/>
              <Route path={this.props.match} component={HomePage}/>
            </Switch>
        </Router>
      </>
    )
  }
 }

export default App;
