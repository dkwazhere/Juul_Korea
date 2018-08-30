import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import {  Col, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
          <Container className="main">
              <ul className="header">
              <h1 id="main-name">Juul Korea</h1>
                <a><NavLink exact to="/">Home / </NavLink></a>
                <a><NavLink to="/about">About Us / </NavLink></a>
                <a><NavLink to="/shop">Shop / </NavLink></a>
                <a><NavLink to="/contact">Contact</NavLink></a>
              </ul>

              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={Home}/>
                <Route path="/Shop" component={Home}/>
                <Route path="/contact" component={Home}/>
              </div>
          </Container>
        </HashRouter>
      </div>
    );
  }
}

export default App;
