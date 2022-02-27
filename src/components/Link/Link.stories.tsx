import { ComponentStory } from '@storybook/react';
import React from 'react';
import Link from './Link.component';


export default {
  title: 'Components/Link',
  component: Link,
 
};

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}></Link>;


export const Default = Template.bind({});
Default.args = {
    children: "Titre"
};