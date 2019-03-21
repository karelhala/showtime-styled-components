import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Main, Nav } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  html, body { height: 100%; }
  
  body {
    margin: 0;
    > div {
      display: grid;
      grid-template-areas: "header header" "nav main";
      grid-template-columns: 290px 1630px;
      grid-template-rows: max-content 1fr;
      height: 100%;
    }
}
`;

class App extends Component {
    render() {
        return (
            <Router>
                <GlobalStyle/>
                <Nav />
                <Main />
            </Router>
    );
  }
}

export default App;
