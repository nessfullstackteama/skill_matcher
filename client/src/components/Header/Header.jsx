import React, { Component, Fragment } from 'react';
import { NavDropdown, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="/" className="logo">
          <img src="https://kdcapplications.ness.com/internal/img/ness-internal.svg" />
        </a>

        <Navbar staticTop fluid>
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
          <Nav pullRight>
            <NavDropdown
              className="notifications-menu"
              title={<Fragment>
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </Fragment>}
              noCaret>
              <li className="header">You have 10 notifications</li>
              <li>

                <ul className="menu">
                  <li>

                    <a href="#">
                      <i className="fa fa-users text-aqua" /> 5 new members joined today
                    </a>
                  </li>

                </ul>
              </li>
              <li className="footer"><a href="#">View all</a></li>
            </NavDropdown>
            <NavDropdown
              className="user user-menu"
              title={<Fragment>
                <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg"
                     className="user-image" alt="User Image" />

                <span className="hidden-xs">Alexander Pierce</span>
              </Fragment>}
              noCaret
            >
              <NavItem href="#">
                Profile
              </NavItem>
              <NavItem href="#">
                Sign out
              </NavItem>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar>
      </header>
    );
  }
}