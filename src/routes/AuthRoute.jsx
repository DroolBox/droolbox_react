
import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if (!token || !refreshToken) {
    return false;
  }

  try {
    // { exp: 12903819203 }
    const { exp } = decode(refreshToken);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

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
