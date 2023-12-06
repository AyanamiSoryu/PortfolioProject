import type { Meta, StoryObj } from '@storybook/react';

import Pen from './Pen';

const meta: Meta<typeof Pen> = {
  component: Pen,
  title: 'Pen',
  tags: []
};

export default meta;
type Story = StoryObj<typeof Pen>;

export const FirstStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};
