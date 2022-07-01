import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  EmptyBasketNotification,
  SuggestionNotification,
} from '../style-components/BasketAndCartOverlay.style';

class CartOverlayNotification extends Component {
  render() {
    return (
      <div>
        {/* NOTE:If items list is empty Cart Overlay shows some notification about it */}

        {!this.props.total.length && (
          <EmptyBasketNotification>
            Your cart is still empty
          </EmptyBasketNotification>
        )}
        {!this.props.total.length && (
          <SuggestionNotification>
            Get started and fill your shopping cart with the latest novelties.
          </SuggestionNotification>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
});

export default connect(mapStateToProps)(CartOverlayNotification);
