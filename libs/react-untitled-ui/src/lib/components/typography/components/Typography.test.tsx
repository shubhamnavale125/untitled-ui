import React from 'react';
import renderer from 'react-test-renderer';
import { Typography } from './Typography';

describe('<Typography />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Typography children="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
