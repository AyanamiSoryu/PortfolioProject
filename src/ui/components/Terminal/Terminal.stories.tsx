import type { Meta, StoryObj } from '@storybook/react';

import Terminal from './Terminal';

const meta: Meta<typeof Terminal> = {
  component: Terminal,
  title: 'FakeTerminal',
  tags: []
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Linked: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};
