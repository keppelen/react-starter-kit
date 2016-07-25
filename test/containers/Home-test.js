import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Home from '../../app/containers/Home';

describe('Home Screen', () => {
  it('contains title', () => {
    expect(shallow(<Home />).contains(<h1 className="header">Welcome to World! <b className="icon" /></h1>)).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<Home />).is('.home')).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(mount(<Home />).find('.home').length).to.equal(1);
  });
});
