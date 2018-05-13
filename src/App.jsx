import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthRoute } from './routes/index';

import NavBar from './components/concrete/NavBar';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
// import Register from './pages/Register';
import GetStarted from './pages/GetStarted.jsx';
import Auth from './pages/Auth.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

export default class App extends PureComponent {
  render() {
    return (
      <main className="py-4">
        <Router>
          <div className="container">
            <NavBar />
            <div
              className="py-4 px-3"
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/get-started" component={GetStarted} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/404" component={PageNotFound} />
                <AuthRoute exact path="/auth" component={Auth} />
              </Switch>
            </div>
          </div>
        </Router>
      </main>
    );
  }
}

/*
<Route exact path="/register" render={props => <Register {...props} />} />
*/
