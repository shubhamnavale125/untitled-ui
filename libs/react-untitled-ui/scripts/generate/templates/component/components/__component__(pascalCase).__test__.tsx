import React from 'react';
import renderer from 'react-test-renderer';
import { __component__(pascalCase) } from './__component__(pascalCase)';

describe('<__component__(pascalCase) />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<__component__(pascalCase) />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
