import React, { Component } from 'react';
import { Main, Nav } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <Main />
            </Router>
    );
  }
}

export default App;
