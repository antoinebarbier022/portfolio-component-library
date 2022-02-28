import React from 'react';
import { ComponentStory } from '@storybook/react';

import Card from '../Card/Card.component';
import YoutubeSlide from './YoutubeSlide.component';

export default {
    title: 'Section/YoutubeSlide',
    component: YoutubeSlide
};

const Template: ComponentStory<typeof YoutubeSlide> = (args) => <Card><YoutubeSlide {...args}  /></Card>;


export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
    chanelId: "UCrICUI4NCuw-P1VrK4vL_dg"
};


