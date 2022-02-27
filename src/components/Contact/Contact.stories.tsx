import React from 'react';
import { ComponentStory } from '@storybook/react';

import Card from '../Card/Card.component';
import Contact from './Contact.component';

export default {
    title: 'Section/Contact',
    component: Contact
};

const Template: ComponentStory<typeof Contact> = (args) => <Card><Contact {...args}  /></Card>;


export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
    email: "string",
    phone: "string",
    location: "string",
};


