import React, { Component } from 'react';
import { Main, Header, Nav } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

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
