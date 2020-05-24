import React, { Component } from 'react';
import './App.css';
import Page2 from './components/Page2';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import history from './history';
import NavBar from './components/NavBar';
import carCard from './components/carCard';


class App extends Component {
  render(){
    return (
      <Router history={history} forceRefresh={true} >
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={carCard} />
          <Route exact={true} path="/page2" component={Page2} />
        </Switch>
      </Router>
    );

  }
} 
export default App;
