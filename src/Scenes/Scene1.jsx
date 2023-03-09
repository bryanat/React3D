import React from 'react'
import logo from '../Assets/logo.svg';
import '../Assets/Scene1.css';

export default function Scene1() {
  return (
    <div >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Scene 1</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

