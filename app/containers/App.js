import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
