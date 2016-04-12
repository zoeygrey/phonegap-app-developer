import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import App from '..';

const props = {
  location: {},
};

function setup(localProps = props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App {...localProps} />);
  const output = renderer.getRenderOutput();

  return {
    localProps,
    output,
    renderer,
  };
}

describe('App component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    console.log(output);
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('app');
  });
});
