import type { Meta, StoryObj } from '@storybook/react';

import ButtonWorkFile from './ButtonWorkFile';

const meta: Meta<typeof ButtonWorkFile> = {
  component: ButtonWorkFile,
  title: 'ButtonWorkFile',
  tags: []
};

export default meta;
type Story = StoryObj<typeof ButtonWorkFile>;

export const ButtonStory: Story = {
  args: {
    sections: [{ id: 'Work' }, { id: 'Files' }, { id: 'Hui' }]
  }
};
