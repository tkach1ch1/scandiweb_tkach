import styled from 'styled-components';
import '../fonts/fonts.css';
import '../styles/styles.css';

// PDP - product description page, a.k.a. product page
// PLP - product listing page, a.k.a. category page

export const BrandNamePDP = styled.span`
  margin-bottom: ${(props) => props.mb};
  font-size: 30px;
  font-weight: 600;
`;

export const ItemNamePDP = styled.span`
  margin-bottom: ${(props) => props.mb};
  font-size: 30px;
`;

export const AtributName = styled.div`
  margin-bottom: ${(props) => props.mb || '8px'};
  font-family: 'Roboto Condensed';
  font-size: 18px;
  font-weight: 700px;
  text-transform: uppercase;
`;

export const PriceValue = styled.div`
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize || '24px'};
  font-weight: 700;
`;

export const ItemDescriptionText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 150%;
`;

export const ChosenSizeAttributes = styled.div`
  padding: ${({ padding }) => padding};
  font-size: ${(props) => props.fontSize};
  border: 1px solid black;
  background-color: white;
`;
export const ChosenSizeAttributesChecked = styled(ChosenSizeAttributes)`
  background-color: black;
  color: white;
  padding: ${({ padding }) => padding};
`;

export const ChosenColorAttributes = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  border: none;
  text-align: center;
`;

export const ChosenColorAttributesChecked = styled(ChosenColorAttributes)`
  background: ${({ background }) => background};
`;

export const ChosenColorWrapper = styled.div`
  padding: 1px;
  border: 1px solid green;
`;
