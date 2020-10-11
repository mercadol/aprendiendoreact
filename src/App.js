import React from 'react';
import './App.css';
//Importar componentes

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';


function App() {
  var buttonString="Ir al blog";
  return (
  <div className="App">
  <Header />
  <Slider title="Bienvenido al Curso de React con Leonardo Mercado"
    btn= {buttonString}
  />
    <div className="center">
      
      <SeccionPruebas />

      <Sidebar />

    </div>{/* END DIV CENTER*/}
    <div className="clearfix"></div>
    <Footer></Footer>
  </div>
  );
}

export default App;
