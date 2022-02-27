import { ComponentStory } from '@storybook/react';
import React from 'react';
import Text from './Text.component';


export default {
  Text: 'Components/Text',
  component: Text,
 
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}></Text>;


export const Default = Template.bind({});
Default.args = {
    children: "lorem"
};