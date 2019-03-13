import React, { Component } from 'react';
import styled from 'styled-components';
import NameList from './Button';
import './App.css';

const Headline = styled.h1`
  font-size: 3em;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline>ALCES</Headline>
        <NameList/>
      </div>
    );
  }
}

export default App;
