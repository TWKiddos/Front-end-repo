import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppLogo from './components/AppLogo'
import MemberPage from './components/MemberPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppLogo />
          {/*This below commented route can be used for homepage, just leaving it here for ref*/}
          {/*<Route exact path="/" component={Home} />*/}
          <Route path="/member" component={MemberPage} />
        </div>
      </Router>
    );
  }
}

export default App;
