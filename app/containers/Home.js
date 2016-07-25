import React from 'react';
import CSSModules from 'react-css-modules';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="header">Welcome to World! <b className="icon" /></h1>
      </div>
    );
  }
}

export default Home;
