import type { Meta, StoryObj } from '@storybook/react';

import CodePenEmbed from './CodePen';

const meta: Meta<typeof CodePenEmbed> = {
  component: CodePenEmbed,
  title: 'CodePenEmbedButton',
  tags: []
};

export default meta;
type Story = StoryObj<typeof CodePenEmbed>;

export const ChatStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};
