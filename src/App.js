import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Main } from './Components/Main';
import { Header } from './Components/common/Header';


class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Main/>
  
      </div>
    );
  }
}

export default App;
