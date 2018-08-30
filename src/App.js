import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'reactstrap';
import image from './assets/images/Juul_logo.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
          <Container className="main">
              <ul className="header">
                <li><img className="logo-img" alt='juulimg' src={image}></img></li>
                <li><a><NavLink exact to="/">Home</NavLink></a></li>
                <li><a><NavLink to="/about">About Us</NavLink></a></li>
                <li><a><NavLink to="/shop">Shop</NavLink></a></li>
                <li><a><NavLink to="/contact">Contact</NavLink></a></li>
              </ul>

              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={Home}/>
                <Route path="/shop" component={Home}/>
                <Route path="/contact" component={Home}/>
              </div>
          </Container>
        </HashRouter>
      </div>
    );
  }
}

export default App;
