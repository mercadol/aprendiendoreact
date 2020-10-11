import React, {Component} from 'react';

class Peliculas extends Component{
    state={
        peliculas:[
            {titulo: 'Batman vs Superman', image: 'https://i.pinimg.com/originals/dd/c0/c0/ddc0c0c665086b10fd405b9530176a9b.jpg'},
            {title: 'Gran torino', image: 'https://i.pinimg.com/originals/3e/51/ce/3e51cebd751e8e19cae7eec12df58988.jpg'},
            {title: 'looper', image: 'https://pics.filmaffinity.com/Looper-874353819-large.jpg'}
        ],
        nombre: 'Leonardo Mercado'
    };
    render(){
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                
            </div>
        );
    }
}

export default Peliculas;