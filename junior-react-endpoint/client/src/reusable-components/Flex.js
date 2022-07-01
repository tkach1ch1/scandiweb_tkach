import React, { Component } from 'react';
import styled from 'styled-components';

//NOTE:FLEX LAYOUT FOR FLEX-BOXS

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap || 'none'};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'stretch'};
  align-items: ${(props) => props.align || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  gap: ${({ gap }) => gap};
`;
export default class Flex extends Component {
  render() {
    return <StyledFlex {...this.props} />;
  }
}
