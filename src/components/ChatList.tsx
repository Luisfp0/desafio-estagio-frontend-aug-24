import { ChatListItem } from "./ChatListItem";
import { useChats } from "@/hooks/useChats";
import { useMemo } from "react";

type ChatListSearchProps = {
  searchTerm: string;
  filteredTerm: string;
};

export const ChatList: React.FC<ChatListSearchProps> = ({
  searchTerm,
  filteredTerm,
}) => {
  const { data, error, loading } = useChats();

  const chats = useMemo(() => {
    if (!data) {
      return [];
    }
    return data
      .filter((chat) => {
        const nameMatch = chat.name
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
      })
      .sort((a, b) => new Date(b.lastMessageDate).getTime() - new Date(a.lastMessageDate).getTime());
  }, [data, searchTerm, filteredTerm]);

  console.log({chats})
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-[#374045] scrollbar-w-1">
      {chats.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))}
    </div>
  );
};
