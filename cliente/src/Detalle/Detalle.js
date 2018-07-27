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
		{this.state.producto > 0&&
			<React.Fragment>
				return(
					<NavBar />

					)
			}	
		)
	}
}


}//Cierre detalle
  

  

export default Detalle