import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { checkAuth, handleLogout } from '../../../auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends PureComponent {
  state = {
    isOpen: false
  }

  handleLogout = () => {
    handleLogout(this.props.history);
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { currentAccount } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand
            to="/"
            tag={Link}
          >
            Droolbox
          </NavbarBrand>
          <NavbarToggler
            onClick={this.handleToggle}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="mx-4"
                  to="/chat"
                  tag={Link}
                >
                  Chat
                </NavLink>
              </NavItem>
              {
                checkAuth(currentAccount)
                && (
                  <NavLink
                    className="mx-4"
                    to="/account"
                    tag={Link}
                  >
                    Account
                  </NavLink>
                )
              }
              <NavItem>
                {
                  checkAuth(currentAccount)
                    ? (
                      <a
                        className="mx-4 nav-link"
                        onClick={this.handleLogout}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        Logout
                      </a>
                    )
                    : (
                      <NavLink
                        className="mx-4"
                        to="/login"
                        tag={Link}
                      >
                        Login
                      </NavLink>
                    )
                }
              </NavItem>
              <NavItem>
                <NavLink
                  className="btn btn-secondary text-white ml-4"
                  to="/get-started"
                  tag={Link}
                >
                  Get Started
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
