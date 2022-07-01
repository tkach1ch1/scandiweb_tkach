import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from '../reusable-components/Flex';
import Plus from '../img/plus-square.svg';
import Minus from '../img/minus-square.svg';
import { connect } from 'react-redux';

const ItemCount = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
const CounterButton = styled.img`
  &:hover {
    cursor: pointer;
    opacity: 0.4;
    transition: all 0.3s ease;
  }
`;

//NOTE:COUNT AMOUNT OF ONE ADDED ITEM IN CART SOVERLAY
//NOTE:IF IT EQUALS 0 DELETES ITEM FROM CART OVERLAY

class ItemAmountCart extends Component {
  render() {
    return (
      <div>
        <Flex
          direction='column'
          justify='center'
          align='center'
          gap='97px'
          margin='0 24px 0 0'
        >
          <CounterButton src={Plus} alt='plus' />
          {this.props.itemAmount >= 0 ? (
            <ItemCount>{this.props.itemAmount}</ItemCount>
          ) : (
            <ItemCount>0</ItemCount>
          )}
          <CounterButton src={Minus} alt='minus' />
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
});

export default connect(mapStateToProps)(ItemAmountCart);
