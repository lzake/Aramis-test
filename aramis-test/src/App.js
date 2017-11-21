import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {PropsRoute} from 'react-router-with-props';

import NavBar from './NavBar'
import Body from './Body'
import ToDo from './ToDo'
// import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App fullscreen">
        <NavBar/>
        <Router>
          <div>
            <PropsRoute exact path="/" component={Body}/>
            <PropsRoute exact path="/todo" component={ToDo}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
