import React, { Component } from 'react';
import styled from 'styled-components';
import TotalSumLine from './TotalSumLine';
import Flex from '../reusable-components/Flex';
import GreenButton from '../reusable-components/GreenButton';
import {
  CartOverlayHeader,
  HeaderName,
  ItemsCounter,
} from '../style-components/BasketAndCartOverlay.style';
import AddedOverlayItem from './AddedOverlayItem';
import { Link } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import { connect } from 'react-redux';

const AddedItemContainer = styled.div`
  max-height: 440px;
  margin-bottom: 20px;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const LinkButton = styled(Link)`
  padding: 12px 30px;
  font-weight: 600;
  font-size: 14px;
  background-color: white;
  color: black;
  text-transform: uppercase;
  border: 1px solid #1d1f22;
  text-decoration: none;
  &:hover {
    background-color: #eeeeee;
    transition: 0.2s ease-in-out;
  }
`;

//NOTE:IF CART OVERLAY ISN'T EMPTY ALL ADDED ITEMS WITH TOTAL SUMM WILL SHOWS

class OverlayAddedItems extends Component {
  checkAmount = () => {
    return this.props.total.length === 1 ? 'item' : 'items';
  };

  render() {
    return (
      <div>
        <CartOverlayHeader mb='32px'>
          <HeaderName>My Bag,</HeaderName>
          <ItemsCounter>
            {this.props.total.length} {this.checkAmount()}
          </ItemsCounter>
        </CartOverlayHeader>
        <AddedItemContainer>
          <AddedOverlayItem />
        </AddedItemContainer>
        <TotalSumLine />
        <Flex justify='space-between'>
          <LinkButton to='/cart' element={<CartPage />}>
            View bag
          </LinkButton>
          <GreenButton padding='12px 30px'>Check out</GreenButton>
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
});

export default connect(mapStateToProps)(OverlayAddedItems);
