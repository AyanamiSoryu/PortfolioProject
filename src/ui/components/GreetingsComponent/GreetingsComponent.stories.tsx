import type { Meta, StoryObj } from '@storybook/react';

import GreetingsComponent from './GreetingsComponent';

const meta: Meta<typeof GreetingsComponent> = {
  component: GreetingsComponent,
  title: 'GreetingsComponent',
  tags: []
};

export default meta;
type Story = StoryObj<typeof GreetingsComponent>;

export const FirstStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
  }
};

export const newFontStory: Story = {};
