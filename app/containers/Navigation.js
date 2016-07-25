import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation" role="navigation">
        <Link to="/" className="item" activeClassName="active">Home</Link>
        <Link to="/about" className="item" activeClassName="active">About</Link>
      </nav>
    );
  }
}
