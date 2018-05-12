import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class NavBar extends PureComponent {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
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
              <NavItem>
                <NavLink
                  className="mx-4"
                  to="/login"
                  tag={Link}
                >
                  Login
                </NavLink>
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
