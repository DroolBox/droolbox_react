import React, { PureComponent } from 'react';

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
          <NavbarBrand href="/">Droolbox</NavbarBrand>
          <NavbarToggler
            onClick={this.handleToggle}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="mx-4"
                  href="/chat"
                >
                  Chat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="mx-4"
                  href="/login"
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="btn btn-secondary text-white ml-4"
                  href="/get-started"
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
