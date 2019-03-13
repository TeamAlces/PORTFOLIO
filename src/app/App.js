import React, { Component } from 'react';
import styled from 'styled-components';
import NameList from './Button';
import './App.css';

const Headline = styled.h1`
  font-size: 3em;
`;

const Wrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Headline>ALCES</Headline>
        <NameList/>
      </Wrapper>
    );
  }
}

export default App;
