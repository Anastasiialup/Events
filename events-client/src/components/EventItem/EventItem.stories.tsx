import type { Meta, StoryObj } from '@storybook/react';
import "../../index.css";
import EventItem from './EventItem';

const meta = {
  title: "Components/EventItem",
  component: EventItem,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    date: { control: "date" },
    location: { control: "text" },
    styleType: { control: "text" },
  },
} satisfies Meta<typeof EventItem>;

export default meta;

export const Default: StoryObj<typeof EventItem> = {
  args: {
    title: 'Конференція з ІТ-технологій',
    description: 'Обговорення останніх трендів у світі ІТ.',
    date: '2025-03-20T10:00:00Z',
    location: 'Київ',
    styleType: 'default',
  },
};

export const Highlighted: StoryObj<typeof EventItem> = {
  args: {
    title: 'Стартап-мітап',
    description: 'Зустріч підприємців та стартаперів.',
    date: '2025-05-15T09:00:00Z',
    location: 'Львів',
    styleType: 'highlighted',
  },
};
export const Card: StoryObj<typeof EventItem> = {
  args: {
    title: 'Воркшоп з машинного навчання',
    description: 'Практичний тренінг з AI та ML',
    date: '2025-06-10T14:00:00Z',
    location: 'Харків',
    styleType: 'card',
  },
};
