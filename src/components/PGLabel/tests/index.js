import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PGLabel from '..';

describe('PGLabel component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PGLabel/>);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('pglabel')).toBe(true);
  });
  it('should render children correctly', () => {
    expect(
      shallow(<PGLabel>PhoneGap Developer App</PGLabel>)
      .contains('PhoneGap Developer App')
    ).toBe(true);
  });
});
