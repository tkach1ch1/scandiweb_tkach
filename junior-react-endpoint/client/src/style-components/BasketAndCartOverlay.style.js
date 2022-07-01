import styled from 'styled-components';
import '../fonts/fonts.css';
import '../styles/styles.css';

export const BasketWrapper = styled.div`
  cursor: pointer;
`;

export const BasketSign = styled.img`
  padding-top: 0;
  &:hover {
    opacity: 0.5;
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

export const BasketSignActive = styled.img`
  padding-top: 0;
  opacity: 0.5;
  transform: scale(1.1);
  transition: transform 0.5s;
`;

export const AmountCounter = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 110px;
  border-radius: 50%;
  background-color: black;
`;
export const StyledCounter = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-align: center;
`;

export const CartOverlayWrapper = styled.div`
  position: absolute;
  width: 325px;
  max-height: 677px;
  right: 110px;
  top: 65px;
  z-index: 10;
  box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  background-color: white;
`;

export const InnerOverlayWrapper = styled.div`
  padding: 32px 20px;
`;

export const CartOverlayHeader = styled.div`
  margin-bottom: ${(props) => props.mb};
  display: flex;
  gap: 7px;
`;

export const HeaderName = styled.div`
  font-weight: 700;
`;
export const ItemsCounter = styled.div`
  font-weight: 500;
`;

export const EmptyBasketNotification = styled.div`
  margin-top: 30px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

export const SuggestionNotification = styled.div`
  margin: 20px 0 30px 0;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;
