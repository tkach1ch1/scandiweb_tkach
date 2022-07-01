import React, { Component } from 'react';
import {
  InerCurrencyBox,
  StyledCurrencyBox,
} from '../style-components/CurrencySwitcher.style';
import Currencies from './Currencies';

export default class CurrencyBox extends Component {
  
  // NOTE:List of all currencies from QraphQl

  render() {
    return (
      <StyledCurrencyBox>
        <InerCurrencyBox>
          <Currencies />
        </InerCurrencyBox>
      </StyledCurrencyBox>
    );
  }
}
