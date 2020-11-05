import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
import Global from '../Global';
import Axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

// 1. Tenemos que recoger el Id del articulo a editar
// 2. Crear un metodo para sacar el objeto del backend
// 3. Repoblar o rellenar los campos del formulario
// 4. 

class EditArticle extends Component{
    url=Global.url;
    articleId =null;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state={
        article: {},
        selectedFile:null,
        status: null
    };

    componentWillMount(){
        this.articleId=this.props.match.params.id;
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator();
    }

    getArticle =(id)=>{
        Axios.get(this.url+'article/'+id)
            .then(res =>{
                this.setState({
                    article: res.data.article
                })
            })
    }

    changeState= ()=>{
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        
    }

    saveArticle=(e)=>{
        e.preventDefault();
        
        this.changeState();
        if(this.validator.allValid()){
            
            //hacer una peticion http por post para guardar con axios
            Axios.put(this.url+'article/'+this.articleId,this.state.article)
                .then(res=>{
                    if(res.data.article){
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });
    
                        //subir la imagen si existe
                        if(this.state.selectedFile !== null){
                            // Sacar id del articulo
                            var articleId= this.state.article._id;
    
                            //Crear form data y añadir fichero
                            const formData= new FormData();
    
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );
    
                            // Peticion http
                            Axios.post(this.url+'upload-image/'+articleId, formData)
                                .then(res => {
                                    if(res.data.article){
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    }else{
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });
                        }else{
                            this.setState({
                                status: 'success'
                            });
                        }
                    }else{
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        }else{
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    fileChange =(event)=>{
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    render() {

        if(this.state.status==='success'){
            return <Redirect to="/blog" />;
        }
        var article= this.state.article
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Articulo</h1>
                    {article.title &&
                    <form className="mid-form" onSubmit={this.saveArticle}>
                    <div className="form-group">
                            <label htmlFor="title"> Titulo</label>
                            <input defaultValue={article.title} type="text" name="title" ref={this.titleRef} onChange={this.changeState} ></input>
                            
                            {this.validator.message('title', this.state.article.title, 'Required')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="content"> Contenido</label>
                            <textarea defaultValue={article.content} name="content" ref={this.contentRef} onChange={this.changeState} ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0"> Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} ></input>
                        </div>
                        <input type="submit" value="Guardar" className="btn btn-success" name="file0" ></input>
                    </form>
                    }
                    {!article.title &&
                    <h2 className="subheader">cargando...</h2>
                    }
                </section>
                <Sidebar />
            </div>
        );
    }
}
export default EditArticle;