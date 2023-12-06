import type { Meta, StoryObj } from '@storybook/react';

// import chatMock from '../../../data/chatMock';
import ChatButton from './ChatButton';

const meta: Meta<typeof ChatButton> = {
  component: ChatButton,
  title: 'ChatButton',
  tags: []
};

export default meta;
type Story = StoryObj<typeof ChatButton>;

export const FirstStory: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    // spec: chatMock.spec,
    // onSubmit: chatMock.onSubmit,
    // title: 'Contact me'
    // isMobile: false
  }
};
