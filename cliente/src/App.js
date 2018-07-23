import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Busqueda from './Busqueda/Busqueda';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Busqueda} />
          </div>        
        </Router>

      </div>
    );
  }
}

export default App;
