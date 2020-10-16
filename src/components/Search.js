import React, {Component} from 'react';
import Articles from './Articles';
import Sidebar from './Sidebar';
import Slider from './Slider'


class Search extends Component{
    

    render(){
        var buscado=this.props.match.params.search;
        return (
            <div id="buscador">
            <Slider title={"Busqueda: "+buscado}
                    size="slider-small"
            />
            <div className="center">

                <div id="content">
                {/**Listados de articulas from back**/}
                    <Articles 
                        search={buscado}
                    />
                </div>
                <Sidebar
                    blog="true" />
            </div>
            </div>
        );
    }
}

export default Search;