import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import TimeZonesIcon from '../Icon/timeZonesIcon.svg';
import LinkComponent from './LinkComponent';

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  title: 'LinkComponent',
  tags: []
};

export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Linked: Story = {
  args: {
    icon: <TimeZonesIcon fill='currentColor' />,
    downloadName: undefined,
    href: 'https://google.com'
    // 👇 The args you need here will depend on your component
  }
};
