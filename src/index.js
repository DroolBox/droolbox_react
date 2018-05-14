/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
// import { withClientState } from 'apollo-link-state';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import 'bootstrap/dist/css/bootstrap.css';
// import 'tachyons';

// import getCurrentAccount from './graphql/getCurrentAccount';

import App from './App.jsx';
// import registerServiceWorker from './registerServiceWorker';

const clientCache = new InMemoryCache();

// const defaultState = {
//   currentAccount: {
//     __typename: 'Account',
//     id: null,
//     email: '',
//     firstName: '',
//     lastName: ''
//   }
// };

// const stateLink = withClientState({
//   cache: clientCache,
//   defaults: defaultState,
//   resolvers: {
//     Mutation: {
//       login: (_, { email, password }, { cache }) => {
//         console.log(email, password);
//         const query = getCurrentAccount;
//         const previousState = cache.readQuery({ query });
//         console.log(previousState);
//         // const data = {
//         //   ...previousState,
//         //   currentAccount: {
//         //     ...previousState.currentAccount,

//         //   }
//         // };
//         return null;
//       }
//     }
//   }
// });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  // link: ApolloLink.from([errorLink, stateLink, httpLink]),
  cache: clientCache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
// registerServiceWorker();
