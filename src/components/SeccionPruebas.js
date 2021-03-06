import React, {Component} from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component{

    contador =0;

    state ={
        contador: 0
    };

    HolaMundo(nombre){
        var presentacion =<h2>hola, soy {nombre}</h2>
        return presentacion;
    }

    sumar=(e)=>{
        this.setState({
            contador: (this.state.contador+1)
        })
    }
    restar=(e)=>{
        this.setState({
            contador: (this.state.contador-1)
        })

    }

    render(){
        var nombre="Leonardo Mercado";

        return (
        <section id ="content">
            <h2 className="subheader"> Últimos Articulos</h2>
            <p>
            Hola bienvenido a al blog hecho con react.
            </p>
            <h2 className="subheader"> Funciones y JSX Basico</h2>
            {this.HolaMundo(nombre)}

            <h2> Componentes</h2>

            <section className="componentes">
            <MiComponente></MiComponente>
            </section>
            <h2 className="subheader"> Estados </h2>
            <p>Contador:  {this.state.contador}</p>

            <input type="button" value ="sumar" onClick={this.sumar}></input>
            <input type="button" value ="restar" onClick={this.restar}></input>
            </section>
        );
    }
}

export default SeccionPruebas;

