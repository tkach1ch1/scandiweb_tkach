import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Flex from '../reusable-components/Flex';
import { amount } from '../export.js/amountFunc';

const TotalLine = styled.div`
  font-family: Roboto;
  font-weight: 500;
`;

const PriceLine = styled.div`
  font-weight: 700;
`;

//NOTE: Calculate a total sum from added items in Overlay by multiplying them on their amount

class CartOverlaySumLine extends Component {
  totalSum = () => {
    const allItemsPrices = Object.values(this.props.total).map((arr) =>
      arr.map((item) => amount(item.prices, this.props.currencySign))
    );

    return allItemsPrices
      .flat(1)
      .reduce((sum, cur) => sum + cur, 0)
      .toFixed(2);
  };
  render() {
    return (
      <Flex justify='space-between' margin='0 0 20px 0'>
        <TotalLine>Total</TotalLine>
        <PriceLine>{this.totalSum()}</PriceLine>
      </Flex>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(CartOverlaySumLine);
