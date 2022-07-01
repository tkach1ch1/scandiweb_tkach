import React, { Component } from 'react';
import styled from 'styled-components';
import '../fonts/fonts.css';
import ChooseSizeButton from './ChooseSizeButton';
import ChooseColorButton from './ChooseColorButton';
import Flex from '../reusable-components/Flex';
import GreenButton from '../reusable-components/GreenButton';
import {
  AtributName,
  PriceValue,
  BrandNamePDP,
  ItemNamePDP,
  ItemDescriptionText,
} from '../style-components/ItemDescription.style';
import { addItemToBasket } from '../redux/totaItemsQuantityReducer';
import { connect } from 'react-redux';

const Form = styled.form`
  width: 300px;
`;

const ItemDescriptionWrapper = styled.div`
  width: 300px;
`;

export const ColorButtonContainer = styled.div`
  max-height: 32px;
  max-width: 32px;
`;

//NOTE:THIS COMPONENT DESCRIBES ITEM IN PDP
class ItemDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    let data = this.props.description;

    const addedItem = {
      id: this.props.id,
      brand: this.props.brand,
      name: this.props.name,
      symbol: this.props.symbol,
      prices: this.props.prices,
      foto: this.props.foto,
      attributes: this.props.attributesArr,
      selectedSize: this.props.sizeBtn,
      selectedColor: this.props.colorBtn,
    };

    return (
      <ItemDescriptionWrapper>
        <Flex direction='column'>
          <BrandNamePDP mb='16px'>{this.props.brand}</BrandNamePDP>
          <ItemNamePDP mb='43px'>{this.props.name}</ItemNamePDP>

          <Form onSubmit={(event) => event.preventDefault()}>
            {/* NOTE:Attributes itteration  */}
            {this.props.attributesArr.map((attr) => (
              <div key={Math.floor(Math.random() * 10000000)}>
                {/* NOTE:Attributes name */}
                <AtributName>{attr.name}:</AtributName>

                <Flex
                  direction='row'
                  margin='0 0 24px 0'
                  flexWrap='wrap'
                  gap='12px'
                >
                  {/* NOTE:Button type changes on attribut's type */}
                  {/* Attributes id, displayValue and value itteration */}
                  {attr.type === 'text'
                    ? attr.items.map((item) => (
                        <ChooseSizeButton
                          key={Math.floor(Math.random() * 100000)}
                          id={item.id}
                          displayValue={item.displayValue}
                          value={item.value}
                          name={attr.name}
                          padding='14px 16px'
                          firstValue={attr.items[0].value}
                        />
                      ))
                    : attr.items.map((item) => (
                        <ColorButtonContainer
                          key={Math.floor(Math.random() * 100000)}
                        >
                          <ChooseColorButton
                            id={item.id}
                            value={item.value}
                            background={item.value}
                            name={attr.name}
                            firstValue={attr.items[0].value}
                          />
                        </ColorButtonContainer>
                      ))}
                </Flex>
              </div>
            ))}

            <AtributName mb='10px'>Price:</AtributName>
            <PriceValue mb='20px'>
              {this.props.symbol}
              {this.props.amount}
            </PriceValue>

            <GreenButton
              padding='16px 93px'
              fontSize='16px'
              mb='40px'
              onClick={() => this.props.dispatch(addItemToBasket(addedItem))}
            >
              Add to cart
            </GreenButton>
          </Form>
          <ItemDescriptionText dangerouslySetInnerHTML={{ __html: data }} />
        </Flex>
      </ItemDescriptionWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  total: state.quantity.total,
  sizeBtn: state.chooseAttr.sizeBtn,
  colorBtn: state.chooseAttr.colorBtn,
});

export default connect(mapStateToProps)(ItemDescription);
