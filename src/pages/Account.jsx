
/* eslint-disable no-console */

import React, { PureComponent } from 'react';

export default class Account extends PureComponent {
  render() {
    const { currentAccount } = this.props;
    console.log(currentAccount);
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
