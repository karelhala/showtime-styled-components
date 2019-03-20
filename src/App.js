import React, { Component } from 'react';
import { Main, Header, Nav } from './components';
import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Nav />
                <Main />
            </>
    );
  }
}

export default App;
