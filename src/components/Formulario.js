import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';


class Formulario extends Component{
    render(){
        return (<div id="formulario">
        <Slider title="Formulario"
                size="slider-small"
        />
        <div className="center">

            <div id="content">
            {/**Listados de articulas from back**/}
            </div>
            <Sidebar
                blog="false" />
        </div>
        </div>);
    }
}

export default Formulario;