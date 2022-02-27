import { ComponentStory } from '@storybook/react';
import React from 'react';

import Card from './Card.component';

export default {
    title: 'Components/Card',
    component: Card
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} >
 test
</Card>;


export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
    background: "bg-black",
    opacity: "bg-opacity-[0.15]",
    className: "text-white"
};


