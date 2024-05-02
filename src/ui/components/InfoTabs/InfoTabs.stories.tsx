import type { Meta, StoryObj } from '@storybook/react';

import InfoTabs from './InfoTabs';

const meta: Meta<typeof InfoTabs> = {
  component: InfoTabs,
  title: 'Informational tabs',
  tags: []
};

export default meta;
type Story = StoryObj<typeof InfoTabs>;

export const FirstStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};

export const newFontStory: Story = {};
