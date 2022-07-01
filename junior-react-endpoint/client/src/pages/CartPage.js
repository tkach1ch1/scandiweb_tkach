import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AddedItemCart from '../components/AddedItemCart';
import Flex from '../reusable-components/Flex';
import GreenButton from '../reusable-components/GreenButton';
import { PriceValue } from '../style-components/ItemDescription.style';
import { amount, totalItemCount } from '../export.js/amountFunc';

const MainCartWrapper = styled.div`
  margin-bottom: 100px;
`;

const CartHeader = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 55px;
`;
const CartWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
`;

const StyledTotal = styled.div`
  font-size: 24px;
  font-weight: ${(props) => props.fotnWeight || 400};
`;
class CartPage extends Component {
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
    const tax = ((this.totalSum() * 21) / 100).toFixed(2);

    return (
      <MainCartWrapper>
        <CartHeader>Cart</CartHeader>
        <CartWrapper>
          <AddedItemCart />
        </CartWrapper>
        <Flex gap='5px' margin='0 0 16px 0'>
          <Flex direction='column'>
            <StyledTotal>Tax 21%:</StyledTotal>
            <StyledTotal>Quantity:</StyledTotal>
            <StyledTotal fontWeight='500'>Total:</StyledTotal>
          </Flex>
          <Flex direction='column'>
            <PriceValue>
              {this.props.currencySign}
              {tax}
            </PriceValue>
            <PriceValue>{totalItemCount(this.props.total)}</PriceValue>
            <PriceValue>
              {this.props.currencySign}
              {this.totalSum()}
            </PriceValue>
          </Flex>
        </Flex>
        <GreenButton padding='13px 115px'>Order</GreenButton>
      </MainCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(CartPage);
