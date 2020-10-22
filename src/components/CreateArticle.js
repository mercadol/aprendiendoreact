import React, {Component} from 'react';
import Sidebar from './Sidebar';


class CreateArticle extends Component{
    render() {
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>
                </section>
                <Sidebar />
            </div>
        );
    }
}
export default CreateArticle;