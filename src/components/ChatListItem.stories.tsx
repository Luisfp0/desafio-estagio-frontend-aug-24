import type { Meta, StoryObj } from "@storybook/react";

import { ChatListItem } from "./ChatListItem";

const meta = {
  component: ChatListItem,
} satisfies Meta<typeof ChatListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    photo: "https://raw.githubusercontent.com/Luisfp0/desafio-estagio-frontend-aug-24/main/src/assets/hyerDev.png",
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
    name: "Hyerdev",
    lastMessage:
      "Olá! Seja bem-vindo(a) à Hyerdev.",
    read: true,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
  },
};

export const MessageUnread: Story = {
  args: {
    photo: "https://github.com/Luisfp0.png",
    name: "Luís Fernando",
    lastMessage:
      "Como podemos ajudar hoje?",
    read: false,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
  },
};