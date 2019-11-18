import React, { Component} from 'react';
import './index.css'

class TodoItens extends Component{
    
    constructor(props){
        super(props);
        this.state = {};
        this.delete = this.delete.bind(this);
    }

    delete(key){
       this.props.delete(key)
    }
    render(){
        return(
            <div className="listaContainer">
                <ul className="lista">
                    {this.props.lista.map((item)=>{
                        return(
                            <li className="item" key={item.key}>{item.text} <a className="dell" onClick={()=>this.delete(item.key)} href="#" >Dell</a></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoItens;