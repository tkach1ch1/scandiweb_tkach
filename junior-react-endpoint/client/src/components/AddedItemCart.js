import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from '../reusable-components/Flex';
import {
  AtributName,
  PriceValue,
  BrandNamePDP,
  ItemNamePDP,
  ChosenSizeAttributesChecked,
  ChosenSizeAttributes,
  ChosenColorWrapper,
  ChosenColorAttributesChecked,
  ChosenColorAttributes,
} from '../style-components/ItemDescription.style';

import ItemAmountCart from '../components/ItemAmountCart';
import { connect } from 'react-redux';
import { amount } from '../export.js/amountFunc';

const ItemCartWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 24px 0;
  margin-bottom: 32px;
`;

const CartImage = styled.img`
  max-width: 200px;
  max-height: 315px;
`;

class AddedItemCart extends Component {
  render() {
    const addedItems = Object.keys(this.props.total).map((key) => {
      return this.props.total[key][0];
    });

    const itemAmount = (elem) => {
      return this.props.total[elem.id + elem.selectedSize + elem.selectedColor]
        .length;
    };

    return (
      <div>
        {addedItems.map((obj) => (
          <ItemCartWrapper key={Math.floor(Math.random() * 100000)}>
            <Flex justify='space-between'>
              <Flex direction='column'>
                <BrandNamePDP mb='16px'>{obj.brand}</BrandNamePDP>
                <ItemNamePDP mb='20px'>{obj.name}</ItemNamePDP>
                <PriceValue mb='20px'>
                  {this.props.currencySign}
                  {amount(obj.prices, this.props.currencySign) *
                    itemAmount(obj)}
                </PriceValue>
                {obj.attributes.map((attr) => (
                  <div key={Math.floor(Math.random() * 10000000)}>
                    <AtributName>{attr.name}:</AtributName>

                    <Flex
                      margin='0 0 8px 0'
                      gap='8px'
                      flexWrap='wrap'
                      align='center'
                    >
                      {attr.type === 'text'
                        ? attr.items.map((valueInAttr) =>
                            valueInAttr.value === String(obj.selectedSize) ? (
                              <ChosenSizeAttributesChecked
                                key={Math.floor(Math.random() * 100000)}
                                padding='10px'
                              >
                                {valueInAttr.displayValue}
                              </ChosenSizeAttributesChecked>
                            ) : (
                              <ChosenSizeAttributes
                                key={Math.floor(Math.random() * 100000)}
                                id={valueInAttr.id}
                                padding='10px'
                                fontSize='14px'
                              >
                                {valueInAttr.displayValue}
                              </ChosenSizeAttributes>
                            )
                          )
                        : attr.items.map((valueInAttr) =>
                            valueInAttr.value === String(obj.selectedColor) ? (
                              <ChosenColorWrapper
                                key={Math.floor(Math.random() * 100000)}
                              >
                                <ChosenColorAttributesChecked
                                  background={valueInAttr.value}
                                  width='32px'
                                  height='32px'
                                />
                              </ChosenColorWrapper>
                            ) : (
                              <ChosenColorAttributes
                                key={Math.floor(Math.random() * 100000)}
                                id={valueInAttr.id}
                                background={valueInAttr.value}
                                width='32px'
                                height='32px'
                              />
                            )
                          )}
                    </Flex>
                  </div>
                ))}
              </Flex>

              <Flex>
                <ItemAmountCart itemAmount={itemAmount(obj)} />
                <CartImage src={obj.foto} alt='imgCart' />
              </Flex>
            </Flex>
          </ItemCartWrapper>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(AddedItemCart);
