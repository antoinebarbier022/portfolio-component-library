import { ComponentStory } from '@storybook/react';
import React from 'react';
import Card from '../Card/Card.component';
import LinksPlateforms from './LinksPlateforms.component';


export default {
  title: 'Section/LinksPlateforms',
  component: LinksPlateforms,
 
};

const Template: ComponentStory<typeof LinksPlateforms> = (args) => <Card><LinksPlateforms {...args}></LinksPlateforms></Card>;


export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "Facebook", link:""},
    { name: "Spotify", link:""},
    { name: "Deezer", link:""},
    { name: "Tiktok", link:""},
    { name: "5euros.com", link:""},
    { name: "Apple Music", link:""},
    { name: "Facebook", link:""},
    { name: "Instagram", link:""},
    { name: "Amazon Music", link:""},
    { name: "Itunes Store", link:""},
    { name: "Soundcloud", link:""},
    { name: "Linkedin", link:""},
    { name: "Dribbble", link:""},
    { name: "Fiver", link:""},
    { name: "Twitter", link:""},
    { name: "Twitch", link:""},
    { name: "Malt", link:""},
    { name: "Gitlab", link:""},
    { name: "Github", link:""},
    { name: "Youtube", link:""},
    { name: "Bandcamp", link:""},
  ]
};