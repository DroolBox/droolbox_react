
/* eslint-disable no-console */

import React, { Fragment, PureComponent } from 'react';
import { compose, graphql } from 'react-apollo';

import { TOKEN, REFRESH_TOKEN } from '../constants';
import login from '../graphql/login';

class Login extends PureComponent {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSignIn(e) {
    e.preventDefault();
    if (this.validate()) {
      try {
        const { data: { login: { token, refreshToken } } } = await this.props.login({
          variables: this.state
        });

        localStorage.setItem(TOKEN, token);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);

        this.props.history.push('/account');
      } catch (err) {
        console.log(err);
      }
    }
  }

  validate() {
    if (this.state.email !== '' && this.state.password !== '') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <h1>Login</h1>
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col">
            <form method="POST" onSubmit={this.handleSignIn}>
              <div className="form-group">
                <label className="control-label" htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">Sign in</button>
              </div>
            </form>
          </div>
          <div className="col">
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Cras mattis consectetur purus sit amet fermentum. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et.
              Vestibulum id ligula porta felis euismod semper. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default compose(
  graphql(login, { name: 'login' })
)(Login);
