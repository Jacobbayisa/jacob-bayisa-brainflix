import React ,{Component} from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import SideBar from './components/SideBar/SideBar';
import Upload from './pages/Upload';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';


class App extends Component {

  uploadHandler(){
    console.log("you clicked me");
  }
  // state = {

  // }

  // componentDidMount(){
  //   axios.get(url)
  //     .then(res =>{
  //       console.log(res.data);
  //       this.setState({
  //         Videos:res.data
  //       });
  //     });
  // }
  render(){
    return (
      <>
        <Header click={this.uploadHandler}/>
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
 }
 
 const uploadHandler = ()=>{

 }

export default App;
