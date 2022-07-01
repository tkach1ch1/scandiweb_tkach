import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../fonts/fonts.css';
import '../styles/styles.css';

export const CategoryName = styled.h1`
  margin-bottom: 103px;
  font-size: 42px;
  font-weight: 400;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 103px 40px;
  margin-bottom: 100px;
`;

export const LinkToPDP = styled(Link)`
  text-decoration: none;
`;

export const ItemProfileWrapper = styled.div`
  padding: 16px;
  max-height: 410px;
  max-width: 390px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transition: all 0.2s ease;
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
`;

export const ItemImg = styled.img`
  margin-bottom: 24px;
  width: 354px;
  height: 330px;
`;

export const BrandItemNamePLP = styled.div`
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: 300;
`;

export const ItemPrice = styled.div`
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: 500;
`;

export const AddToBasketSign = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  left: 300px;
  bottom: 100px;
  border-radius: 50%;
  background-color: var(--green-color);
  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s ease-in-out;
  }
`;

export const ItemProfileWrapperOutOfStock = styled.div`
  padding: 16px;
  max-height: 410px;
  max-width: 390px;
  opacity: 60%;
  &:hover {
    cursor: pointer;
  }
`;

export const OutOfStockText = styled.div`
  position: relative;
  bottom: 280px;
  left: 110px;
  font-size: 24px;
  color: #8d8f9a;
  text-transform: uppercase;
`;
