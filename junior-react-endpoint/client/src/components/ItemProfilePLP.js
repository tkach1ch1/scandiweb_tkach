import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemAddedId } from '../redux/itemIdReducer';
import basketSign from '../img/BasketSign.svg';
import ProductDesctiptionPage from '../pages/ProductDesctiptionPage';
import Flex from '../reusable-components/Flex';
import {
  AddToBasketSign,
  BrandItemNamePLP,
  ImageWrapper,
  ItemImg,
  ItemPrice,
  ItemProfileWrapper,
  ItemProfileWrapperOutOfStock,
  LinkToPDP,
  OutOfStockText,
} from '../style-components/ProductListingPage.style';

//NOTE:THIS COMPONENT CUSTOMIZES HOW ONE ITEM IN GRID BOX PLP WILL LOOKS LIKE

class ItemProfilePLP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false,
    };
  }

  render() {
    return (
      <Flex justify='center'>
        {this.props.inStock ? (
          
          <LinkToPDP
            to={this.props.id}
            onClick={() => this.props.dispatch(itemAddedId(this.props.id))}
            element={<ProductDesctiptionPage />}
          >
            <ItemProfileWrapper
              onMouseEnter={() => this.setState({ isMouseInside: true })}
              onMouseLeave={() => this.setState({ isMouseInside: false })}
            >
              <Flex direction='column' justifty='flex-start'>
                <ImageWrapper>
                  <ItemImg src={this.props.gallery} alt='img' />
                </ImageWrapper>
                <Flex gap='5px' margin='0 0 10px 0'>
                  <BrandItemNamePLP>{this.props.brand}</BrandItemNamePLP>
                  <BrandItemNamePLP>{this.props.name}</BrandItemNamePLP>
                </Flex>

                <ItemPrice>
                  {this.props.symbol}
                  {this.props.amount}
                </ItemPrice>

                {this.state.isMouseInside && (
                  <AddToBasketSign>
                    <img src={basketSign} alt='basketSign' />
                  </AddToBasketSign>
                )}
              </Flex>
            </ItemProfileWrapper>
          </LinkToPDP>
        ) : (
          <ItemProfileWrapperOutOfStock>
            <Flex direction='column' justifty='flex-start'>
              <ImageWrapper>
                <ItemImg src={this.props.gallery} alt='img' />
              </ImageWrapper>
              <Flex gap='5px' margin='0 0 10px 0'>
                <BrandItemNamePLP>{this.props.brand}</BrandItemNamePLP>
                <BrandItemNamePLP>{this.props.name}</BrandItemNamePLP>
              </Flex>

              <ItemPrice>
                {this.props.symbol}
                {this.props.amount}
              </ItemPrice>

              {this.state.isMouseInside && (
                <AddToBasketSign>
                  <img src={basketSign} alt='basketSign' />
                </AddToBasketSign>
              )}
            </Flex>
            {!this.props.inStock && (
              <OutOfStockText>Out of stock</OutOfStockText>
            )}
          </ItemProfileWrapperOutOfStock>
        )}
      </Flex>
    );
  }
}

const mapStateToProps = (state) => ({
  identificator: state.itemIdent.identificator,
});

export default connect(mapStateToProps)(ItemProfilePLP);
