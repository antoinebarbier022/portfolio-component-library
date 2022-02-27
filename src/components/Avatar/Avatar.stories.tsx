import { ComponentStory } from '@storybook/react';
import React from 'react';

import Avatar from './Avatar.component';

export default {
    title: 'Components/Avatar',
    component: Avatar
};

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;


export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
    variant: "rounded",
    size: "bg-opacity-[0.15]",
    className: "text-white"
};


