import React, {Component} from 'react';

class Pelicula extends Component{

    marcar =() =>{
        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    }

    render(){
        const {titulo, image} = this.props.pelicula;
        return (
            <article className="article-item" id="article-temple">
                <div className="image-wrap">
                    <img src={image} alt={titulo}/>
                </div>
                <h2>{titulo}</h2>
                <span className="date">
                    hace 5 minutos
                </span>
                Leer más
                <button onClick={this.marcar}>Marcar como favorito</button>
                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;
