import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
