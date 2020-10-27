import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
import Global from '../Global';
import Axios from 'axios';

//validacion formularios y alertas aqui
class CreateArticle extends Component{
    url=Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state={
        article: {},
        status: null
    };

    changeState= ()=>{
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
        
    }

    saveArticle=(e)=>{
        e.preventDefault();
        this.changeState();
        //hacer una peticion http por post para guardar con axios
        Axios.post(this.url+'save',this.state.article)
            .then(res=>{
                if(res.data.article){
                    this.setState({
                        article: res.data.article,
                        status: 'success'
                    });
                }else{
                    this.setState({
                        status: 'failed'
                    });
                }
            })
    }

    render() {

        if(this.state.status==='success'){
            return <Redirect to="/blog" />;
        }

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>

                    <form className="mid-form" onSubmit={this.saveArticle}>
                    <div className="form-group">
                            <label htmlFor="title"> Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content"> Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState} ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0"> Imagen</label>
                            <input type="file" name="file0" ></input>
                        </div>
                        <input type="submit" value="Guardar" className="btn btn-success" name="file0" ></input>
                    </form>
                </section>
                <Sidebar />
            </div>
        );
    }
}
export default CreateArticle;