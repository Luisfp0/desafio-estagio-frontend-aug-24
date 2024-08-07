export type FilterOptions = "all" | "group" | "unreads";

export type ChatItem = {
  id: string;
  lastMessage: string;
  photo: string;
  name: string;
  lastMessageDate: string;
  read: boolean;
  type: "GROUP" | "DM";
};
