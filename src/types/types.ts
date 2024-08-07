export type ChatItem = {
  contact: {
    photo: string;
    name: string;
  };
  lastMessage: string;
  lastMessageDate: string;
  read: boolean;
  type: "GROUP" | "DM";
};