import { ComponentStory } from '@storybook/react';
import React from 'react';
import BasicTabs from './BasicTabs.component';


export default {
  title: 'Components/BasicTabs',
  component: BasicTabs,
 
};

const Template: ComponentStory<typeof BasicTabs> = () => <BasicTabs />;


export const Primary = Template.bind({});


