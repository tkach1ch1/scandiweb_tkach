import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/react-components';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Flex from '../reusable-components/Flex';
import ItemDescription from '../components/ItemDescription';
import { amount } from '../export.js/amountFunc';

const SmallImg = styled.img`
  margin-bottom: 33px;
  width: 100px;
  height: 100px;
`;

const MainImg = styled.img`
  width: 610px;
  height: 510px;
`;

const GET_ITEM = gql`
  query GET_ITEM($id: String!) {
    product(id: $id) {
      id
      name
      brand
      gallery
      description
      category
      attributes {
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          symbol
        }
      }
    }
  }
`;

class ProductDesctiptionPage extends Component {
  render() {
    return (
      <div>
        <Query
          query={GET_ITEM}
          variables={{
            id: this.props.identificator[this.props.identificator.length - 1],
          }}
        >
          {({ loading, data }) => {
            if (loading) return null;

            //NOTE:To shorten the path
            const item = Array(data.product);

            //NOTE:To get access to atrributes and to get rid of an extra array
            const attrArray = item.map((item) => item.attributes).flat(1);

            return item.map((item) => (
              <Flex
                justify='space-between'
                key={Math.floor(Math.random() * 100000)}
              >
                <Flex direction='column' margin='0 30px 0 0'>
                  {item.gallery.map((foto) => (
                    <SmallImg
                      src={foto}
                      alt={item.name}
                      key={Math.floor(Math.random() * 100000)}
                    />
                  ))}
                </Flex>
                <Flex margin='0 70px 0 0'>
                  <MainImg src={item.gallery[0]} alt={item.name} />
                </Flex>

                <ItemDescription
                  key={Math.floor(Math.random() * 100000)}
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  prices={item.prices}
                  amount={amount(item.prices, this.props.currencySign)}
                  symbol={this.props.currencySign}
                  description={item.description}
                  foto={item.gallery[0]}
                  attributesArr={attrArray}
                />
              </Flex>
            ));
          }}
        </Query>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  identificator: state.itemIdent.identificator,
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(ProductDesctiptionPage);
