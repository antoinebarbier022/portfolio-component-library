import { ComponentStory } from '@storybook/react';
import React from 'react';
import Card from '../Card/Card.component';
import Footer from './Footer.component';


export default {
  title: 'Section/Footer',
  component: Footer,
 
};

const Template: ComponentStory<typeof Footer> = (args) => <Card><Footer {...args}></Footer></Card>;


export const Default = Template.bind({});
Default.args = {
    title: "Antoine"
};