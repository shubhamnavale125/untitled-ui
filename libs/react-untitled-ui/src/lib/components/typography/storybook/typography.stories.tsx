import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../components/Typography';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
};
export default Story;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...(args as any)} />;

export const Regular = Template.bind({});
Regular.args = {};
