import React, { Component } from 'react';
import './App.css';
import Login from './cmp/Login';
import Header from './cmp/Header';

class App extends Component{
  render()
  {
    return (
    <div className="App">
        <Header/>
        <Login/>
    </div>
   )
 }
}

export default App;