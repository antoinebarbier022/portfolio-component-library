// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../tailwind.css';

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    values: [
      { name: 'light', value: '#F3F4F6' },
      { name: 'dark', value: '#333333' },
      { name: 'blue', value: '#0091ea' },
      { name: 'green', value: '#4caf50' },
      
    ],
  },
};
