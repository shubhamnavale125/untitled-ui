import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './Icon';

describe('<Icon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
