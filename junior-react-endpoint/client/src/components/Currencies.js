import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/react-components';
import Currency from './Currency';

const GET_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

export default class Currencies extends Component {
  render() {
    return (
      <Query query={GET_CURRENCIES}>
        {({ loading, data }) => {
          if (loading) return null;

          return data.currencies.map(({ label, symbol }) => (
            //NOTE:Took all currencies from GraphQL and placed them via array iteration in Currency

            <Currency
              key={Math.floor(Math.random() * 10000000)}
              label={label}
              symbol={symbol}
            />
          ));
        }}
      </Query>
    );
  }
}
