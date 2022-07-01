import styled from 'styled-components';
import '../fonts/fonts.css';
import '../styles/styles.css';

export const CurrencyContainer = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
`;

export const CurrencySign = styled.div`
  width: 20px;
  text-align: right;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    opacity: 0.5;
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

export const CurrencySignActive = styled.div`
  width: 20px;
  text-align: right;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
  transform: scale(1.1);
  transition: transform 0.5s;
  color: green;
`;

export const StyledCurrencyBox = styled.div`
  display: block;
  position: absolute;
  width: 115px;
  height: auto;
  right: 315px;
  top: 65px;
  background: #ffffff;
  box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
`;

export const InerCurrencyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const CurrencyWrapper = styled.div`
  width: 100%;
  &:hover {
    background-color: #eeeeee;
    transition: 0.2s;
  }
`;

export const StyledCurrency = styled.div`
  padding: 8px 20px;
  font-size: 18px;
  font-weight: 500;
  word-spacing: 5px;
`;
