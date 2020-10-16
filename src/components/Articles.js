import React, {Component} from 'react'

import Axios from 'axios';
import 'moment/locale/es';
import Moment from 'react-moment';
import Global from '../Global'
import ImageDefault from '../assets/images/download.jpg'
import { Link } from 'react-router-dom';


class Articles extends Component{
    url= Global.url;
    state={
        articles:[],
        status: null
    };

    componentWillMount(){
        var home=this.props.home;
        var search=this.props.search;
        if(home=== 'true'){
            this.getLastArticles();
        }else if(search && search != null && search != undefined){
            
            this.getArticlesBySearch(search);
            
        }else{
            this.getArticles();
        }
        
    }

    getArticlesBySearch=(buscado)=>{
        Axios.get(this.url+"search/"+buscado)
            .then(res=>{
                if(res.data.articles){
                    this.setState({
                        articles: res.data.articles,
                        status:'success'
                    });
                }else{
                    this.setState({
                        articles: res.data.articles,
                        status:'failed'
                    });
                }
                
            });
    }

    getLastArticles=()=>{
        Axios.get(this.url+"articles/last")
            .then(res=>{
                this.setState({
                    articles: res.data.articles,
                    status:'success'
                });
            });
    }

    getArticles=()=>{
        Axios.get(this.url+"articles")
            .then(res=>{
                this.setState({
                    articles: res.data.articles,
                    status:'success'
                });
            });
    }
    render(){
        if(this.state.articles.length>=1){
            var listArticles= this.state.articles.map((article, i) =>{
                return(
                    <article className="article-item" key={i} id="article-template">
                        <div className="image-wrap">
                        {
                            article.image !== null ? (
                            <img src={this.url+'get-image/'+article.image} alt={article.title} />
                        ):(
                            <img src={ImageDefault} alt={article.title} />
                        )
                        }
                            
                        </div>
    
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment locale="es" fromNow>
                                {article.date}
                            </Moment>
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>

                        <div className="clearfix"></div>
                    </article>
                );
            });

            return(
                <div id="articles">
                    <h1 className="subheader">LISTADO DE ARTíCULOS</h1>
                    {listArticles}
                </div>
            );
        }else if(this.state.articles.length && this.state.status==='success'){
            return(
                <div id="articles">
                    <h1 className="subheader">NO HAY ARTICULOS PARA MOSTRAR</h1>
                    <p>Todavia no HAY articulos para mostrar</p>
                </div>
            );
        }else{
            return(
                <div id="articles">
                    <h1 className="subheader">Cargando......</h1>
                    <p>Espere mientras se carga el contenido</p>
                </div>
            );
        }
    }
}

export default Articles;