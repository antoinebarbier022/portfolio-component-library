import { ComponentStory } from '@storybook/react';
import React from 'react';
import Card from '../Card/Card.component';
import CustomLinksSection from './CustomLinksSection.component';


export default {
  title: 'Section/CustomLinksSection',
  component: CustomLinksSection,
 
};

const Template: ComponentStory<typeof CustomLinksSection> = (args) => <Card><CustomLinksSection {...args}></CustomLinksSection></Card>;


export const Default = Template.bind({});
Default.args = {

};