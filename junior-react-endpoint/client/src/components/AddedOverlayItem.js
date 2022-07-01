import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from '../reusable-components/Flex';
import {
  BrandItemNamePLP,
  ItemPrice,
} from '../style-components/ProductListingPage.style';
import ItemAmountOverlay from './ItemAmountOverlay';
import { connect } from 'react-redux';
import {
  ChosenColorAttributes,
  ChosenColorAttributesChecked,
  ChosenColorWrapper,
  ChosenSizeAttributes,
  ChosenSizeAttributesChecked,
} from '../style-components/ItemDescription.style';
import { amount } from '../export.js/amountFunc';

const AddedItemWrapper = styled.div``;
const AtributName = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

const ImageOverlay = styled.img`
  width: 120px;
  height: 200x;
`;

//NOTE:ITEM DESCRIPTION IN OVERLAY THAT WE ARE ADDING FROM PLP OR PDP

class AddedOverlayItem extends Component {
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
          <Flex margin='0 0 40px 0' key={Math.floor(Math.random() * 100000)}>
            <Flex direction='column' margin='0 10px 0 0'>
              <AddedItemWrapper>
                <BrandItemNamePLP fontSize='16px' mb='10px'>
                  {obj.brand}
                </BrandItemNamePLP>
                <BrandItemNamePLP fontSize='16px' mb='12px'>
                  {obj.name}
                </BrandItemNamePLP>
                <ItemPrice fontSize='16px' mb='12px'>
                  {this.props.currencySign}
                  {amount(obj.prices, this.props.currencySign) *
                    itemAmount(obj)}
                </ItemPrice>

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
                              >
                                {valueInAttr.displayValue}
                              </ChosenSizeAttributesChecked>
                            ) : (
                              <ChosenSizeAttributes
                                key={Math.floor(Math.random() * 100000)}
                                id={valueInAttr.id}
                                padding='2px'
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
                                  width='16px'
                                  height='16px'
                                />
                              </ChosenColorWrapper>
                            ) : (
                              <ChosenColorAttributes
                                key={Math.floor(Math.random() * 100000)}
                                id={valueInAttr.id}
                                background={valueInAttr.value}
                                width='16px'
                                height='16px'
                              />
                            )
                          )}
                    </Flex>
                  </div>
                ))}
              </AddedItemWrapper>
            </Flex>
            <ItemAmountOverlay itemAmount={itemAmount(obj)} />
            <ImageOverlay src={obj.foto} alt='imgOvr' />
          </Flex>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.quantity.total,
  currencySign: state.currency.currencySign,
  sizeBtn: state.chooseAttr.sizeBtn,
  colorBtn: state.chooseAttr.colorBtn,
});

export default connect(mapStateToProps)(AddedOverlayItem);
