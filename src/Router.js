import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas'

class Router extends Component{
    render(){
        return (
            <BrowserRouter>
            {/* Configurar rutas y paginas */}
                <Switch>
                    {/*el prefijo exact me obliga a que la url sea exacta y evita que 
                    la ruta valla eredando y no me muestre las siguientes en la lista */}
                    <Route exact path="/" component={Peliculas}/>
                    <Route exact path="/ruta-prueba" component={SeccionPruebas}/>
                    <Route exact path="/segunda-ruta" component={MiComponente}/>
                    
                    <Route exact path="/pruebas/:nombre/:apellido?" render={(props)=>{
                        var nombre = props.match.params.nombre;
                        var apellido = props.match.params.apellido;

                        return(
                            <div id="content">
                                <h1 className="subheader">Pagina de pruebas</h1>
                                <h2>
                                {nombre &&
                                <React.Fragment>
                                {nombre}
                                </React.Fragment>
                                }
                                {apellido &&
                                <React.Fragment>
                                {' '+apellido}
                                </React.Fragment>
                                }

                                </h2>
                            </div>
                    )}}/>
                    
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
