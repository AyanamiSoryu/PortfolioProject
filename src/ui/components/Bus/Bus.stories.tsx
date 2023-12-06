import type { Meta, StoryObj } from '@storybook/react';

import Bus from './Bus';

const meta: Meta<typeof Bus> = {
  component: Bus,
  title: 'Bus',
  tags: []
};

export default meta;
type Story = StoryObj<typeof Bus>;

export const Linked: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};
