import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/react-components';
import { connect } from 'react-redux';
import ItemProfilePLP from '../components/ItemProfilePLP';
import {
  CategoryName,
  Grid,
} from '../style-components/ProductListingPage.style';
import { amount } from '../export.js/amountFunc';

const GET_ITEMS = gql`
  {
    categories {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  }
`;

class Tech extends Component {
  render() {
    return (
      <div>
        <CategoryName>Tech</CategoryName>

        <Grid>
          <Query query={GET_ITEMS}>
            {({ loading, data }) => {
              if (loading) return null;

              return data.categories[2].products.map((item) => (
                <div key={Math.floor(Math.random() * 10000000)}>
                  <ItemProfilePLP
                    name={item.name}
                    brand={item.brand}
                    gallery={item.gallery[0]}
                    symbol={this.props.currencySign}
                    amount={amount(item.prices, this.props.currencySign)}
                    id={item.id}
                    inStock={item.inStock}
                  />
                </div>
              ));
            }}
          </Query>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySign: state.currency.currencySign,
});

export default connect(mapStateToProps)(Tech);
