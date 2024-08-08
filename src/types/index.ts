export type FilterOptions = "all" | "group" | "unreads";

export type ChatItem = {
  id: string;
  message: {
    typeOfMessage: "audio" | "message";
    lastMessage: string;
  };
  photo: string;
  name: string;
  lastMessageDate: string;
  read: boolean;
  type: "GROUP" | "DM";
};
