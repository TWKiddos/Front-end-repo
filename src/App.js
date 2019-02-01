import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AppLogo from './components/AppLogo'
import MemberPage from './components/MemberPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppLogo />
          <Route path="/member" component={MemberPage} />
        </div>
      </Router>
    );
  }
}

export default App;
