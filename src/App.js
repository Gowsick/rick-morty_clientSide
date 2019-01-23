import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './Components/CharacterList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterList/>
      </div>
    );
  }
}

export default App;
