import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider'

class Home extends Component{
    render(){
        return (
            <React.Fragment>
            <Slider title="Bienvenido al Curso de React con Leonardo Mercado"
                btn='Ir al blog'
            />
            <div className="center">

                <div id="content">
                    <h1 className="subheader">Últimos Artículos</h1>
                </div>
                <Sidebar />
            </div>
            </React.Fragment>
        );
    }
}

export default Home;