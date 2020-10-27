import React, {Component} from 'react';
import Sidebar from './Sidebar';

class Formulario extends Component{

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state= {
        user:{}
    };

    
    recibirFormulario = (e) =>{
        e.preventDefault();
        var genero= 'hombre';
        if(this.generoHombreRef.current.checked){
            genero= 'hombre';
        }else if(this.generoMujerRef.current.checked){
            genero= 'mujer';
        }else{
            genero= 'otro';
        }
        var user ={
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        };

        this.setState({
            user: user
        });
    }

    render(){
        return (<div id="formulario">

        <div className="center">

            <div id="content">
                <h1 className="subheader">Formulario</h1>
                <form className="mid-form" onSubmit={this.recibirFormulario}>
                    <div className="form-grup">
                        <label htmlFor="nombre" >Nombre</label>
                        <input type="text" name="nombre" ref={this.nombreRef} />
                    </div>
                    
                    <div className="form-grup">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" ref={this.apellidosRef} />
                    </div>
                    
                    <div className="form-grup">
                        <label htmlFor="bio">Biografia</label>
                        <textarea name="bio" ref={this.bioRef}></textarea>
                    </div>

                    <div className="form-grup">
                        <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
                        <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
                        <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
                    </div>
                    <div className="clearfix"></div>
                    <input type="submit" value="Enviar" className="btn btn-success" />
                </form>
            </div>
            
            <Sidebar
                blog="false" />
        </div>
        </div>);
    }
}

export default Formulario;