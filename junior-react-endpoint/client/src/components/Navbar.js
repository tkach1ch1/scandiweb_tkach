import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/a-logo.svg';
import {
  Logo,
  NavWrapper,
  CurrencyBasketContainer,
} from '../style-components/Navbar.style';
import Categories from './Categories';
import CurrencySwitcher from './CurrencySwitcher';
import Basket from './Basket';


//NOTE:NAVBAR CUSTOMIZATION
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <div>
          <Categories />
        </div>

        <Link to='/all'>
          <Logo src={logo} alt='logo'></Logo>
        </Link>

        <CurrencyBasketContainer>
          <CurrencySwitcher />
          <Basket />
        </CurrencyBasketContainer>
      </NavWrapper>
    );
  }
}
