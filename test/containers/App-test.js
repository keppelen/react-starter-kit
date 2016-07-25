import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../../app/containers/App';
import Home from '../../app/containers/Home';
import Navigation from '../../app/containers/Navigation';

describe('App Screen', () => {
  it('contains a children component', () => {
    const wrapper = shallow(<App><div></div></App>);
    expect(wrapper.is('div')).to.equal(true);
  });

  it('contains <Navigation /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navigation).length).to.equal(1);
  });
});
