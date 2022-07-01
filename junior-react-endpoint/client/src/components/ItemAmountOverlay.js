import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from '../reusable-components/Flex';
import smallPlus from '../img/small-plus-square .svg';
import smallMinus from '../img/small-minus-square.svg';
import { connect } from 'react-redux';

const ItemCount = styled.div`
  font-weight: 500;
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

class ItemAmountOverlay extends Component {
  render() {
    return (
      <div>
        <Flex
          direction='column'
          justify='center'
          align='center'
          gap='66px'
          margin='0 8px 0 0'
        >
          <CounterButton src={smallPlus} alt='plus' />
          {this.props.itemAmount > 0 ? (
            <ItemCount>{this.props.itemAmount}</ItemCount>
          ) : (
            <ItemCount>0</ItemCount>
          )}
          <CounterButton src={smallMinus} alt='minus' />
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
});

export default connect(mapStateToProps)(ItemAmountOverlay);
