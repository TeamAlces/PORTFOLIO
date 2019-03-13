import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import Ink from 'react-ink';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  ${media.phone`width: 100%;`};

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
  padding: 0.5em 0;
  display: inline-block;
  width: 175px;
  position: relative;

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

export default class NameList extends Component {
  render() {
    return (
      <List horizontal>
        <li>
          <Name Ruben>
            Ruben
            <Ink 
              duration={1400}
              radius={800}
            />
          </Name>
        </li>
        <li>
          <Name Veronika>
            Veronika
            <Ink 
              duration={1400}
              radius={800}
            />
          </Name>
        </li>
        <li>
          <Name Petter>
            Petter
            <Ink 
              duration={1400}
              radius={800}
            />
          </Name>
        </li>
      </List>
    );
  }
}
