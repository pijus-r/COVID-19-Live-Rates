import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from "./components/Countries";
import All from "./components/All";
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">
      <All/>
      <Countries/>
    </div>
  );
}}

export default App;
