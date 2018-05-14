
/* eslint-disable no-console */

import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { checkAuth } from '../auth';

export default class Auth extends PureComponent {
  static propTypes = {
    component: func
  }

  renderComponent = () => {
    const { component: Component } = this.props;
    return checkAuth()
      ? <Component {...this.props} />
      : <Redirect to={{ pathname: '/login' }} />;
  }

  render() {
    return (
      <Route
        {...this.props}
        component={this.renderComponent}
      />
    );
  }
}
