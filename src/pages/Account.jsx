
/* eslint-disable no-console */

import React, { PureComponent } from 'react';
import { compose, graphql } from 'react-apollo';

import getCurrentAccount from '../graphql/getCurrentAccount';

class Account extends PureComponent {
  render() {
    const { currentAccount } = this.props;
    // const { currentAccount: { email, firstName, lastName } } = this.props;
    return (
      <div className="row">
        <div className="col">
          <h1>My Account</h1>
          <p>Welcome back, {currentAccount && currentAccount.firstName}</p>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getCurrentAccount, {
    options: {
      fetchPolicy: 'network-only'
    },
    props: ({ data: { currentAccount } }) => ({
      currentAccount
    })
  })
)(Account);
