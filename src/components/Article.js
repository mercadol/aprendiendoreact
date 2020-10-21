import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Global from '../Global';
import Axios from 'axios';
import ImageDefault from '../assets/images/download.jpg'
import 'moment/locale/es';
import Moment from 'react-moment';

class Article extends Component{
    url= Global.url;

    state={
        article: false,
        status: null
    };

    componentWillMount(){
        this.getArticle();
    }

    getArticle=()=>{
        var id= this.props.match.params.id;
        Axios.get(this.url+'article/'+id)
            .then(res =>{
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            }).catch(err =>{
                this.setState({
                    article: false,
                    status: 'success'
                })
            });
    }
    render(){
        var article= this.state.article;
        return(
            <div className="center">
                <section id="content">
                {article &&
                    <article className="article-item article-detail">
                        <div className="image-wrap">
                        {
                            article.image !== null ? (
                            <img src={this.url+'get-image/'+article.image} alt={article.title} />
                        ):(
                            <img src={ImageDefault} alt={article.title} />
                        )
                        }
                        </div>
    
                        <h1 className="subheader">{article.title}</h1>
                        <span className="date">
                            <Moment locale="es" fromNow>{article.date}</Moment>
                        </span>
                        <p>
                            {article.content}
                        </p>
                        btn Editar/ btn Eliminar
                        <div className="clearfix"></div>
                    </article>
                }

                {!article && this.state.status==='success' &&
                <div id="article">
                    <h2 className="subheader"> El articulo no existe</h2>
                    <p> Intentalo de nuevo mas tarde</p>
                </div>
                }
                {this.state.status ==null &&
                <div id="article">
                    <h2 className="subheader"> Cargando....</h2>
                    <p> Espere </p>
                </div>
                }
                </section>
                <Sidebar />
            </div>
            
        );
    }
    
}
export default Article;