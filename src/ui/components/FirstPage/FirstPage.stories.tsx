import type { Meta, StoryObj } from '@storybook/react';

import FirstPage from './FirstPage';

const meta: Meta<typeof FirstPage> = {
  component: FirstPage,
  title: 'FirstPage',
  tags: []
};

export default meta;
type Story = StoryObj<typeof FirstPage>;

export const FirstStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};

export const newFontStory: Story = {};
