
import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Account extends PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.data.me.firstName}</p>
        <p>{this.props.data.me.email}</p>
      </div>
    );
  }
}

const query = gql `
  query {
    me {
      email
      firstName
    }
  }
`;

export default graphql(query)(Account);
