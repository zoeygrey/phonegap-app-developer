import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import App from '..';
import PGLabel from 'components/PGLabel';

const props = {
  location: {},
};

describe('App component', () => {
  it('should render empty state correctly', () => {
    expect(shallow(<App { ...props }/>)
      .contains(<PGLabel>PhoneGap Developer App</PGLabel>))
      .toBe(true);
  });
  it('should render children correctly', () => {
    const child = <div className="not-empty-state"/>;
    expect(shallow(<App { ...props }>{ child }</App>)
      .contains(child))
      .toBe(true);
  });
});
