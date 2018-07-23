import React, { Component } from 'react';
import './NavBar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.props = props
        console.log(props)

        this.state = {
            textValue: ''
        }
    }

clickMe(e) {
  const value = e.target.value
  this.setState({
    textValue: value
  })
 }

/*handleValue(e) {
  const value = e.target.value
  console.log(value)
  this.setState({
  textValue: value
  })
}*/


render() {
    const url = "/items?search=" + this.state.textValue
	return (
        <div class="nav-container">
            <img src= "../../imagenes/Logo_ML.png" />
            <input 
                value={this.state.textValue} 
                type="text" 
                placeholder="Nunca dejes de buscar" 
                onChange={this.clickMe.bind(this)}
            />
            <Link to={url}><img src = "../../imagenes/ic_Search.png" /></Link>
        </div>
			);
        }
           
			

			
		}
	


 
export default NavBar;