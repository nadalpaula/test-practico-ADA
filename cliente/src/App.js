import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Busqueda from './Busqueda/Busqueda';
import Producto from './Producto/Producto';
import Detalle from './Detalle/Detalle';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Busqueda} />
          <Route path="/items/:id" component={Detalle} />

          </div>        
        </Router>

      </div>
    );
  }
}

export default App;
