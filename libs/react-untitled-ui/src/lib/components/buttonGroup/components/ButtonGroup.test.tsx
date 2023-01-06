import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonGroup } from './ButtonGroup';

describe('<ButtonGroup />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
