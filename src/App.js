import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';
import Main from './Main.js'


class App extends Component {  
  render() {
    return (     
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Servus IO</h1>
        </header>   
        <Main/>
      </div>    
    );
  }
}

export default App;
