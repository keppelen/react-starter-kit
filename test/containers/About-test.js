import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import About from '../../app/containers/About';

describe('About Screen', () => {
  it('contains title', () => {
    expect(shallow(<About />).contains(<h1>About page</h1>)).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<About />).is('.about')).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(mount(<About />).find('.about').length).to.equal(1);
  });
});
