import type { Meta, StoryObj } from '@storybook/react';

import UserItem from './UserItem';

const meta = {
  title: "Components/UserItem",
  component: UserItem,
  argTypes: {
    name: { control: "text" },
    email: { control: "text" },
    styleType: { control: "text" },
  },
} satisfies Meta<typeof UserItem>;

export default meta;

export const Default: StoryObj<typeof UserItem> = {
  args: {
    name: 'Олександр Коваленко',
    email: 'oleksandr@example.com',
    styleType: 'default',
  },
};

export const Highlighted: StoryObj<typeof UserItem> = {
  args: {
    name: 'Марія Шевченко',
    email: 'maria@example.com',
    styleType: 'highlighted',
  },
};

export const Card: StoryObj<typeof UserItem> = {
  args: {
    name: 'Іван Петренко',
    email: 'ivan@example.com',
    styleType: 'card',
  },
};
