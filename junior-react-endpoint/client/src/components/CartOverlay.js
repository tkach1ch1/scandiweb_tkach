import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CartOverlayWrapper,
  InnerOverlayWrapper,
} from '../style-components/BasketAndCartOverlay.style';
import CartOverlayNotification from './CartOverlayHeader';
import OverlayAddedItems from './OverlayAddedItems';

class CartOverlay extends Component {
  render() {
    return (
      <CartOverlayWrapper>
        <InnerOverlayWrapper>
          {/*NOTE:Notification section if no items added and OverviewItemList if list isn't empty  */}

          {!Object.keys(this.props.total).length ? (
            <CartOverlayNotification />
          ) : (
            <OverlayAddedItems />
          )}

          {/*  */}
        </InnerOverlayWrapper>
      </CartOverlayWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
});

export default connect(mapStateToProps)(CartOverlay);
