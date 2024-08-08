import type { Meta, StoryObj } from "@storybook/react";

import { ChatListItem } from "./ChatListItem";

const meta = {
  component: ChatListItem,
} satisfies Meta<typeof ChatListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    photo:
      "https://raw.githubusercontent.com/Luisfp0/desafio-estagio-frontend-aug-24/main/src/assets/hyerDev.png",
    name: "Hyerdev",
    message: {
      lastMessage: "Olá! Seja bem-vindo(a) à Hyerdev.",
      typeOfMessage: "message",
    },
    read: true,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
    type: "DM",
  },
};

export const WithoutPhoto: Story = {
  args: {
    photo: "",
    name: "Hyerdev",
    message: {
      lastMessage: "Olá! Seja bem-vindo(a) à Hyerdev.",
      typeOfMessage: "message",
    },
    read: true,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
    type: "DM",
  },
};

export const MessageUnread: Story = {
  args: {
    photo: "https://github.com/Luisfp0.png",
    name: "Luís Fernando",
    message: {
      lastMessage: "Como podemos ajudar hoje?",
      typeOfMessage: "message",
    },
    read: false,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
    type: "DM",
  },
};

export const MessageVisualized: Story = {
  args: {
    photo: "https://github.com/Luisfp0.png",
    name: "Luís Fernando",
    message: {
      lastMessage: "Como podemos ajudar hoje?",
      typeOfMessage: "message",
    },
    read: true,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
    type: "DM",
  },
};

export const MessageWithAudio: Story = {
  args: {
    photo: "https://github.com/Luisfp0.png",
    name: "Luís Fernando",
    message: {
      lastMessage: "0:43",
      typeOfMessage: "audio",
    },
    read: false,
    lastMessageDate: "2024-08-07T14:41:13.197Z",
    type: "DM",
  },
};
