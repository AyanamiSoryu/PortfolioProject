import type { Meta, StoryObj } from '@storybook/react';

import SeeMoreButton from './SeeMoreButton';

const meta: Meta<typeof SeeMoreButton> = {
  component: SeeMoreButton,
  title: 'See more button',
  tags: []
};

export default meta;
type Story = StoryObj<typeof SeeMoreButton>;

export const Linked: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};
