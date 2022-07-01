import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../fonts/fonts.css';
import '../styles/styles.css';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 0 0 0;
  margin-bottom: 80px;
`;

export const LinkContainer = styled.li`
  display: inline-block;
  position: relative;
  margin-right: 5px;
  text-transform: uppercase;
  border: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0 16px 30px 16px;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: var(--green-color);
  }
  &:not(.active):hover {
    border-bottom: 1px solid var(--green-color);
    transition: 0.2s;
  }
`;

export const Logo = styled.img`
  margin-right: 170px;
`;

export const CurrencyBasketContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 120px;
  gap: 38px;
`;
