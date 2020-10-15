import React, {Component} from 'react'
import Axios from 'axios';
import Global from '../Global'
import ImageDefault from '../assets/images/download.jpg'

class Articles extends Component{
    url= Global.url;
    state={
        articles:[],
        status: null
    };

    componentWillMount(){
        this.getArticles();
    }
    getArticles=()=>{
        Axios.get(this.url+"articles")
            .then(res=>{
                this.setState({
                    articles: res.data.articles,
                    status:'success'
                });
                console.log(this.state);
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
                            {article.date}
                        </span>
                        Leer más

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