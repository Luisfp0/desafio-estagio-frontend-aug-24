import profilePicture from "../assets/profilePicture.png";
import { ChatListItem } from "./ChatListItem";
import { ChatItem } from "@/types/types";

const CHATS: ChatItem[] = [
  {
    contact: {
      photo: profilePicture,
      name: "John Doe",
    },
    lastMessage: "Hello, how are you today?",
    lastMessageDate: "12:45 PM",
    read: false,
    type: "DM",
  },
  {
    contact: {
      photo: profilePicture,
      name: "Luís Fernando",
    },
    lastMessage: "Are you coming to the party?",
    lastMessageDate: "09:10 AM",
    read: true,
    type: "DM",
  },
  {
    contact: {
      photo: profilePicture,
      name: "Grupo deu mesmo",
    },
    lastMessage:
      "// console.log('Activating matchenv and installing dependencies...')",
    lastMessageDate: "12:45 PM",
    read: false,
    type: "GROUP",
  },
];

type ChatListSearchProps = {
  searchTerm: string;
  filteredTerm: string;
};

export const ChatList: React.FC<ChatListSearchProps> = ({
  searchTerm,
  filteredTerm,
}) => {
  const filteredChats = CHATS.filter((chat) => {
    const nameMatch = chat.contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let additionalFilterMatch = false;
    if (filteredTerm === "all") {
      additionalFilterMatch = true;
    } else if (filteredTerm === "group") {
      additionalFilterMatch = chat.type === "GROUP";
    } else if (filteredTerm === "unreads") {
      additionalFilterMatch = !chat.read;
    } else {
      additionalFilterMatch = true;
    }

    return nameMatch && additionalFilterMatch;
  });

  return (
    <div>
      {filteredChats.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))}
    </div>
  );
};
