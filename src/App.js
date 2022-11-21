import React, { Component } from 'react';
import Blockquote from './components/Blockquote';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Blockquote />
      </div>
    )
  }
}

export default App;