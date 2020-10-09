import React from 'react';
import logo from './logo.svg';
import './App.css';
//Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function HolaMundo(nombre){
  var presentacion =<h2>hola, soy {nombre}</h2>
  return presentacion;
}

function App() {
  var nombre="Leonardo Mercado";
  return (
  <div className="App">
  <Header />
  <Slider />
    <div className="center">
      <section id="content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar en:  <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre)}
        <section className="componentes">
          <MiComponente></MiComponente>
          <Peliculas/>
        </section>
      </section>
      <Sidebar />

    </div>{/* END DIV CENTER*/}
    <div className="clearfix"></div>
    <Footer></Footer>
  </div>
  );
}

export default App;
