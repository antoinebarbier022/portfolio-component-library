import { ComponentStory } from '@storybook/react';
import React from 'react';

import ExempleA from './ExempleA.component';

export default {
    title: 'Exemples/A',
    component: ExempleA
};

const Template: ComponentStory<typeof ExempleA> = () => <ExempleA />;


export const Default = Template.bind({});
Default.storyName = "Default";



