import React from 'react';
import logo from './logo.svg';
import './App.css';

function HolaMundo(nombre){
  var presentacion =<h2>hola, soy {nombre}</h2>

  return presentacion;
}

function App() {
  var nombre="Leonardo Mercado";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar en:  <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre)}
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
}

export default App;
