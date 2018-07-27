import React, { Component } from 'react';
import queryString from "query-string"
import { BrowserRouter as Route, Link } from "react-router-dom";


import NavBar from '../NavBar/NavBar'
import Producto from '../Producto/Producto'

class Busqueda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productos: [],
      searchId: ''
    }
  }

  componentDidMount() {
    let id = queryString.parse(this.props.location.search);
    console.log(666, id)
    fetch('http://localhost:3001/api/items?q=' + id.search).then((result) => { 
     console.log(777, result)
     return result.json()
    }).then((resultado) => {
      console.log(999, resultado)
      this.setState({
        productos: resultado,
        searchId: id
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    let id = queryString.parse(nextProps.location.search);
    let newId = id.search;
    if(newId !== this.state.searchId) {      
      fetch('http://localhost:3001/api/items?q=' + newId).then((result) => { 
        console.log(111, result)
        return result.json()
        
      }).then((resultado) => {  

      this.setState({
          productos: resultado,
          searchId: newId 
        })        
      })
    }
  }

  render(){ 
  console.log(333, this.state.productos[0])   
    return (
      <div>
        <NavBar />
        {this.state.productos.length > 0 && 
          <React.Fragment>
            {this.state.productos[0].items.map((producto, i) =>{
              return( 
               <Producto 
                id={producto.id} 
                title={producto.title} 
                price={producto.price.amount}
                decimals={producto.price.decimals} 
                picture={producto.picture} />
              )
            })}   
          </React.Fragment>
        }   
      </div>
    );
  }
}

export default Busqueda;