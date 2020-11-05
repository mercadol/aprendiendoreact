import React, {Component} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//Importar componentes
import Error from './components/Error';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
//import SeccionPruebas from './components/SeccionPruebas'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Article from './components/Article';
import Search from './components/Search';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component{
    render(){
        return (
            <BrowserRouter>
            <Header />
            
                <Switch>
                    {/*el prefijo exact me obliga a que la url sea exacta y evita que 
                    la ruta valla eredando y no me muestre las siguientes en la lista */}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/blog/articulo/:id" component={Article}/>
                    <Route exact path="/blog/crear" component={CreateArticle}/>
                    <Route exact path="/blog/editar/:id" component={EditArticle}/>
                    <Route exact path="/blog/busqueda/:search" component={Search}/>
                    <Route exact path="/redirect/:search" render={
                        (props)=>{
                            var search =props.match.params.search;
                            return(<Redirect to={'/blog/busqueda/'+search}/>);
                        }
                    } />

                    <Route exact path="/formulario" component={Formulario}/>
                    <Route exact path="/peliculas" component={Peliculas}/>


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
                
                <div className="clearfix"></div>
                <Footer></Footer>
            </BrowserRouter>
        );
    }
}

export default Router;
