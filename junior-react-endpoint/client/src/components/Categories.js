import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/react-components';
import { LinkContainer, StyledNavLink } from '../style-components/Navbar.style';
import '../styles/styles.css';

const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <div>
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return null;

            //NOTE:Took all categories from GraphQL and placed them via array iteration in Navbar

            return data.categories.map(({ name }) => (
              <LinkContainer key={Math.floor(Math.random() * 1000)}>
                <StyledNavLink to={name} onClick={this.onClick}>
                  {name}
                </StyledNavLink>
              </LinkContainer>
            ));
          }}
        </Query>
      </div>
    );
  }
}
