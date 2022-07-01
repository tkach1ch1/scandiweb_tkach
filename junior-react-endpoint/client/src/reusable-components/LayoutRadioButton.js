import React, { Component } from 'react';
import styled from 'styled-components';

//NOTE:LAYOUT FOR SIZE/CAPACITY ETC. ATTRIBUTES CHOOSE BUTTONS

const Label = styled.label`
  padding: ${(props) => props.padding};
  margin: ${({ margin }) => margin};
  font-size: ${(props) => props.fontSize || '16px'};
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledRadioButton = styled.input.attrs((props) => ({
  type: props.type || 'radio',
}))`
  display: none;
  &:checked + ${Label} {
    background-color: ${(props) => props.bgChecked};
    color: ${(props) => props.colorChecked};
    border: ${(props) => props.borderChecked};
  }
`;

export default class RadioButton extends Component {
  render() {
    return (
      <div>
        <StyledRadioButton {...this.props} />
        <Label {...this.props}>{this.props.displayValue}</Label>
      </div>
    );
  }
}
