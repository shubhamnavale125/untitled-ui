import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...(args as any)} />;

export const Regular = Template.bind({});
Regular.args = {};
