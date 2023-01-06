import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from '../components/Icon';


const Story: ComponentMeta<typeof Icon> = {
    component: Icon,
    title: "Icon",
};
export default Story;

const Template: ComponentStory<typeof Icon> = args => (
    <Icon  {...(args as any)} />
);

export const Regular = Template.bind({});
Regular.args = {};
