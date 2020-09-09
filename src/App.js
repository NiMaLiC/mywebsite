import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Event from './Event';
import ColorBlock from './ColorBlock';



class App extends React.Component{

  
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        Hi {this.props.name}!
         <Clock ></Clock>
        <Event ></Event>
      <ColorBlock ></ColorBlock>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}}



export default App;
