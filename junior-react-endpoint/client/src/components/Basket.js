import React, { Component } from 'react';
import cart from '../img/Empty Cart.svg';
import cartActive from '../img/Empty Cart Active.svg';
import {
  AmountCounter,
  BasketSign,
  BasketSignActive,
  BasketWrapper,
  StyledCounter,
} from '../style-components/BasketAndCartOverlay.style';
import CartOverlay from './CartOverlay';
import { connect } from 'react-redux';
import { totalItemCount } from '../export.js/amountFunc';

class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  //Allows to close Cart Overlay outside of him

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        isActive: false,
      });
    }
  }

  render() {
    return (
      <div
        onClick={() => this.setState({ isActive: true })}
        ref={this.wrapperRef}
      >
        <BasketWrapper>
          {this.state.isActive ? (
            <BasketSignActive src={cartActive} alt='activeCart' />
          ) : (
            <BasketSign src={cart} alt='cart' />
          )}

          {/* NOTE:It shows some black circle with amount of items if items list isn't empty */}

          {!!totalItemCount(this.props.total) && (
            <AmountCounter>
              <StyledCounter>{totalItemCount(this.props.total)}</StyledCounter>
            </AmountCounter>
          )}

          {/*  */}
        </BasketWrapper>

        {/* CartOverlay Activation  */}
        {this.state.isActive && <CartOverlay />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
});

export default connect(mapStateToProps)(Basket);
