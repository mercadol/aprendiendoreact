import React, {Component} from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component{
    state={
        peliculas:[
            {titulo: 'Batman vs Superman', image: 'https://i.pinimg.com/originals/dd/c0/c0/ddc0c0c665086b10fd405b9530176a9b.jpg'},
            {titulo: 'Gran torino', image: 'https://i.pinimg.com/originals/3e/51/ce/3e51cebd751e8e19cae7eec12df58988.jpg'},
            {titulo: 'looper', image: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Looper_poster.jpg'}
        ],
        nombre: 'Leonardo Mercado',
        favorita: {}
    };
    
    cambiarTitulo = ()=>{
        var {peliculas}= this.state;
        peliculas[0].titulo="Batman Begins";
        this.setState({
            peliculas: peliculas
        });
    }

    favorita =(pelicula, indice)=>{
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }

    render(){
        var pStayle={
            background: 'green',
            color: 'white',
            padding: '10px'
        };
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p><button onClick={this.cambiarTitulo}> Cambiar titulo de batman</button></p>
                
                {this.state.favorita.titulo && //esto es una condicion en jsx like if()
                
                <p style={pStayle} className="favorita">
                    <strong>La pelicula favorita es:</strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
                }

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) =>{
                            return(
                                <Pelicula
                                key={i}
                                pelicula={pelicula}
                                indice = {i}
                                marcarFavorita={this.favorita}></Pelicula>
                                )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;