import type { Meta, StoryObj } from '@storybook/react';

import ArrowButton from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  component: ArrowButton,
  title: 'Arrow Button',
  tags: []
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Linked: Story = {
  args: {
    href: 'https://google.com'
    // 👇 The args you need here will depend on your component
  }
};
