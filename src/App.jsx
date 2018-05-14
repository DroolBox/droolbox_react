import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';

import getCurrentAccount from './graphql/getCurrentAccount';

import { AuthRoute } from './routes/index';

import { validateTokens } from './auth';

import NavBar from './components/concrete/NavBar';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import GetStarted from './pages/GetStarted.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

class App extends PureComponent {
  componentWillMount() {
    validateTokens();
  }

  render() {
    return (
      <main className="py-4">
        <Router>
          <div className="container">
            <NavBar currentAccount={this.props.currentAccount} />
            <div
              className="py-4 px-3"
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/get-started" component={GetStarted} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/404" component={PageNotFound} />
                <AuthRoute
                  exact
                  path="/account"
                  component={Account}
                  currentAccount={this.props.currentAccount}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </main>
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
)(App);
