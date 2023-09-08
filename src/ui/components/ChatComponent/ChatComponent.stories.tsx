import type { Meta, StoryObj } from '@storybook/react';

import chatMock from '../../../data/chatMock';
import ChatComponent from './ChatComponent';

const meta: Meta<typeof ChatComponent> = {
  component: ChatComponent,
  title: 'ChatComponent',
  tags: []
};

export default meta;
type Story = StoryObj<typeof ChatComponent>;

export const ChatStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    spec: chatMock.spec,
    onSubmit: chatMock.onSubmit,
    title: 'Contact me'
  }
};
