import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyledCurrency,
  CurrencyWrapper,
} from '../style-components/CurrencySwitcher.style';
import { switchCurrencySign } from '../redux/switchCurrencyReducer';

class Currency extends Component {
  render() {
    return (

      //NOTE:It presetns all currencies in Currency Box that we are adding via array itteration in Currencies
      //NOTE:And allows on Currency click switch currency symbol and amount everywhere

      <CurrencyWrapper
        onClick={() =>
          this.props.dispatch(switchCurrencySign(this.props.symbol))
        }
      >
        <StyledCurrency>
          {this.props.symbol} {this.props.label}
        </StyledCurrency>
      </CurrencyWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(Currency);
