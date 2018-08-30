import React, { Component } from 'react';
import './App.css';
import {Button, Icon} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Juul Korea</h1>
        <p>쥴코리아.</p>
        <Button waves='light'>
          <Icon>thumb_up</Icon>
        </Button>
      </div>
    );
  }
}

export default App;
