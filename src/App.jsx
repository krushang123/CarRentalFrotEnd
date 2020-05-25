import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from './history';


class App extends Component {
  render(){
    return (
      <Router history={history} forceRefresh={true} >
        <Switch>
          <Route exact={true} path="/" component={Page1} />
          <Route exact={true} path="/page2/:id" component={Page2} />
          <Route exact={true} path="/page3" component={Page3} />
        </Switch>
      </Router>
    );

  }
} 
export default App;
