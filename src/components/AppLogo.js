import React, {Component} from 'react';
import './style.css';

export default class AppLogo extends Component {
  render() {
    return (
      <header className="titleBar">
        <h1 className="title">
          Blood Glory
        </h1>
        <button class="logout">Logout</button>
      </header>
    )
  }
}
