import React, { Component } from 'react';
import { connect } from 'react-redux';
import arrowDown from '../img/arrow_down.svg';
import arrowUp from '../img/arrow-up.svg';
import {
  CurrencyContainer,
  CurrencySign,
  CurrencySignActive,
} from '../style-components/CurrencySwitcher.style';
import CurrencyBox from './CurrencyBox';

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  //NOTE:Allows to close Currency Switcher outside of him

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
      <div>
        <CurrencyContainer
          onClick={() => this.setState({ isActive: !this.state.isActive })}
          ref={this.wrapperRef}
        >
          {this.state.isActive ? (
            <CurrencySignActive>{this.props.currencySign}</CurrencySignActive>
          ) : (
            <CurrencySign>{this.props.currencySign}</CurrencySign>
          )}

          {/* NOTE:Arrows switch */}

          {this.state.isActive ? (
            <img src={arrowUp} alt='arrow'></img>
          ) : (
            <img src={arrowDown} alt='arrow'></img>
          )}

          {/*  */}

          {/* NOTE:CurrencyBox Activation */}

          {this.state.isActive && <CurrencyBox />}
        </CurrencyContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(CurrencySwitcher);
