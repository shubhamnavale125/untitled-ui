import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from '../components/Avatar';


const Story: ComponentMeta<typeof Avatar> = {
    component: Avatar,
    title: "Avatar",
};
export default Story;

const Template: ComponentStory<typeof Avatar> = args => (
    <Avatar  {...(args as any)} />
);

export const Regular = Template.bind({});
Regular.args = {};
