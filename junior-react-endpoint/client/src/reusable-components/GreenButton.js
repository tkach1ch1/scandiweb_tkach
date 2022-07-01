import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/styles.css';

//NOTE:LAYOUT FOR GREEN SUBMIT BUTTON 

const StyledButton = styled.button`
  padding: ${(props) => props.padding || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  font-size: ${(props) => props.fontSize || '14px'};
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #5ece7b;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.2s ease-in-out;
  }
`;

export default class GreenButton extends Component {
  render() {
    return <StyledButton {...this.props} />;
  }
}
