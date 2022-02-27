import { ComponentStory } from '@storybook/react';
import React from 'react';

import ExempleB from './ExempleB.component';

export default {
    title: 'Exemples/B',
    component: ExempleB
};

const Template: ComponentStory<typeof ExempleB> = () => <ExempleB />;


export const Default = Template.bind({});
Default.storyName = "Default";



