import React from 'react';
import { ComponentStory } from '@storybook/react';

import Card from '../Card/Card.component';
import SocialNetworks from './SocialNetworks.component';

export default {
    title: 'Section/SocialNetworks',
    component: SocialNetworks
};

const Template: ComponentStory<typeof SocialNetworks> = (args) => <Card><SocialNetworks {...args}  /></Card>;


export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
    data: [
        { name:"Youtube", link:"https://www.youtube.com/channel/UCrICUI4NCuw-P1VrK4vL_dg" },
        { name:"Instagram", link:"https://www.instagram.com/mathisproduction/" },
        { name:"Tiktok", link:"https://www.tiktok.com/@mathisproduction" }]
    
};