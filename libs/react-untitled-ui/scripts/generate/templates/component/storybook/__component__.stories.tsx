import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { __component__(pascalCase) } from '../components/__component__(pascalCase)';


const Story: ComponentMeta<typeof __component__(pascalCase)> = {
    component: __component__(pascalCase),
    title: "__component__(pascalCase)",
};
export default Story;

const Template: ComponentStory<typeof __component__(pascalCase)> = args => (
    <__component__(pascalCase)  {...(args as any)} />
);

export const Regular = Template.bind({});
Regular.args = {};
