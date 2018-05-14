
import gql from 'graphql-tag';

export default gql `
  query {
    currentAccount {
      id
      email
      firstName
      lastName
    }
  }
`;
