import { ComponentStory } from '@storybook/react';
import React from 'react';
import Subtitle from './Subtitle.component';


export default {
  title: 'Components/Subtitle',
  component: Subtitle,
 
};

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args}></Subtitle>;


export const Default = Template.bind({});
Default.args = {
    children: "Titre"
};