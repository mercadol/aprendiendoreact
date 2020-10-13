import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider'

class Home extends Component{
    render(){
        return (
            <div id="home">
            <Slider title="Bienvenido al Curso de React con Leonardo Mercado"
                btn='Ir al blog'
                size="slider-big"
            />
            <div className="center">

                <div id="content">
                    <h1 className="subheader">Últimos Artículos</h1>
                </div>
                <Sidebar />
            </div>
            </div>
        );
    }
}

export default Home;