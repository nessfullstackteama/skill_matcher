import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * Sidebar
 */
export default class Sidebar extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree">
            <li><Link to="/users"><i className="fa fa-link"></i> <span>Users</span></Link></li>
            <li><Link to="/skilltags"><i className="fa fa-link"></i> <span>Skill Tags</span></Link></li>
            <li><Link to="/profile"><i className="fa fa-link"></i> <span>My Profile</span></Link></li>
          </ul>
        </section>
      </aside>
    );
  }
}