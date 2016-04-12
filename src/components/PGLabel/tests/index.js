import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import PGLabel from '..';

const props = {
  children: <div />,
};

function setup(localProps = props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<PGLabel {...localProps} />);
  const output = renderer.getRenderOutput();

  return {
    localProps,
    output,
    renderer,
  };
}

describe('PGLabel component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('pglabel');
  });
});
