import React, {Component} from 'react';
import Pelicula from './Pelicula';
import Sidebar from './Sidebar';
import Slider from './Slider';

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
            <React.Fragment>
            <Slider title="Peliculas"
                size="slider-small"
            />
            <div className="center">
            <div id="content" className="peliculas">
                <h2 className="subheader">Listado de peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p><button onClick={this.cambiarTitulo}> Cambiar titulo de batman</button></p>
                
                {/*la condiciones en jsx se hacen colocando entre llaves la
                sentencia booleana y se coloca && al final para entenderse como
                un condicional. tambien se puede con un signo ? y entre parentesis
                para usar un else */}
                {this.state.favorita.titulo ? ( //this.state.favorita.titulo && //esto es una condicion en jsx like if()
                
                <p style={pStayle} className="favorita">
                    <strong>La pelicula favorita es:</strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>):(
                    <p>No hay pelicula favorita</p>
                )
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
            <Sidebar
                blog="false" />
            </div>
            </React.Fragment>
        );
    }
}

export default Peliculas;