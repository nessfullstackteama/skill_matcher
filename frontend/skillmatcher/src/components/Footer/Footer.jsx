import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          be the force with you
        </div>
        <strong>Copyright © 2018 <a href="#">NESS KE s.r.o.</a>.</strong> All rights reserved.
      </footer>
    );
  }
}