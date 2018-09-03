import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
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
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>

              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/contact" component={Contact}/>
              </div>
          </Container>
        </HashRouter>
      </div>
    );
  }
}

export default App;
