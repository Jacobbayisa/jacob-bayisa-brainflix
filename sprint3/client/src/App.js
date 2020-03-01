import React ,{Component} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './pages/Main';
import Upload from './pages/Upload';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


const HomePage = (props) => {
  return(
    <Main {...props} />
  )
}
const UploadPage = (props) =>{
  return (
    <Upload {...props}/>
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
              <Route path="/videos/:id" component={HomePage} />
            </Switch>
        </Router>
      </>
    )
  }
 }

export default App;
