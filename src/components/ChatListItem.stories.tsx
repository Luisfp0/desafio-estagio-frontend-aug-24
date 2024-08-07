import type { Meta, StoryObj } from "@storybook/react";

import { ChatListItem } from "./ChatListItem";

const meta = {
  component: ChatListItem,
} satisfies Meta<typeof ChatListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    photo: "https://placehold.co/48x48",
    name: "Hyerdev",
    lastMessage:
      "Olá! Seja bem-vindo(a) à Hyerdev.",
    read: true,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
  },
};

export const WithoutPhoto: Story = {
  args: {
    photo: "",
    name: "Luís Fernando",
    lastMessage:
      "Sed incidunt sequi veniam veritatis molestias ab minima non natus.",
    read: true,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
  },
};

export const MessageUnread: Story = {
  args: {
    photo: "https://placehold.co/48x48",
    name: "Luís Fernando",
    lastMessage:
      "Sed incidunt sequi veniam veritatis molestias ab minima non natus.",
    read: false,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
  },
};