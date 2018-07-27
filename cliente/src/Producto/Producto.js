import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

import './Producto.css'

class Producto extends Component{
 constructor(props){
 super(props)
 }

  render(){
    const url = '/items/' + this.props.id
    return(
        <div className = 'contenedor-producto'>
        <div className = 'producto'>
            <div className = 'img'>
              <img src={this.props.picture} />
            </div>
            <div className = 'contenedor-texto'>
              <div className= 'texto'>
              <p className = 'titulo'>{this.props.title}</p>
              </div>
              <div className = 'texto precio'>
                <p className = 'entero'>$ {this.props.price}</p>
                <p className = 'decimal'>.{this.props.decimals}</p>
              </div>  
            </div>
            <div className = 'boton'>
            <Link to={url}><button className = 'btn'>Ver Producto</button></Link>
            </div>
          </div>
        </div>
    )
  }
}

export default Producto