import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonGroup } from '../components/ButtonGroup';


const Story: ComponentMeta<typeof ButtonGroup> = {
    component: ButtonGroup,
    title: "ButtonGroup",
};
export default Story;

const Template: ComponentStory<typeof ButtonGroup> = args => (
    <ButtonGroup  {...(args as any)} />
);

export const Regular = Template.bind({});
Regular.args = {};
