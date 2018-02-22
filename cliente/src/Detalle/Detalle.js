import React, { Component } from "react";
import Producto from '../NavBar/NavBar'


class Detalle extends Component{
 constructor(props){
 super(props)
  this.state = {
  	producto: [],
  	searchId: ""
  }
 }

 componentDidMount() {
    const id = this.props.match.params.id
    fetch('http://localhost:3000/api/items/' + id).then((result) => { 
      return result.json()
    }).then((result) => {
      //console.log(result);
      this.setState({
        producto: result,
        searchId: id
      })
    })
  }//cierre component 

render(){
	return(
		<div main-container>
		<NavBar />
		{this.state.producto.item &&
			<img className='image' src={this.state.producto.item.picture}/>
          <p className='condition'> {this.state.producto.item.condition}</p>
          <p>{this.state.producto.item.quantity}</p>
          <p className='title-txt'>{this.state.producto.item.title}</p>
          <p className='price-txt'>{this.state.producto.item.price}</p>
          <button>Comprar</button>
          <p className='description'>{this.state.producto.description.plain_text}</p>   
			}	
		)
	}
}


}//Cierre detalle
  

  

export default Detalle