import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import './App.css';

class App extends Component {
  render() {

    const List = styled.ul`
      list-style-type: none;
      padding: 0;
      ${props => props.horizontal && css`
        li {
          display: inline;
        }
      `}
    `;

    const Name = styled.a`
      background: transparent;
      border-radius: 3px;
      color: white;
      margin: 0.5em 1em;
      padding: 0.25em 1em;

      ${props => props.Ruben && css`
          background: #158FB2;
      `}
      ${props => props.Veronika && css`
          background: #FF5185;
      `}
      ${props => props.Petter && css`
          background: #CCBF18;
      `}

    `;
    return (
      <div className="App">
        <h3>ALCES</h3>
        <List horizontal>
          <li><Name Ruben>Ruben</Name></li>
          <li><Name Veronika>Veronika</Name></li>
          <li><Name Petter>Petter</Name></li>
        </List>
      </div>
    );
  }
}

export default App;
