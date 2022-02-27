import { ComponentStory } from '@storybook/react';
import React from 'react';
import Title from './Title.component';


export default {
  title: 'Components/Title',
  component: Title,
 
};

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}></Title>;


export const Default = Template.bind({});
Default.args = {
    children: "Titre"
};