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
      .sort(
        (a, b) =>
          new Date(b.lastMessageDate).getTime() -
          new Date(a.lastMessageDate).getTime()
      );
  }, [data, searchTerm, filteredTerm]);

  if (loading) {
    const skeletonsCount = Array.from(new Array(6));
    return (
      <>
        {skeletonsCount.map(() => (
          <div
            role="status"
            className="flex items-center p-4 border-b border-[#8696A026] bg-[#111A21] animate-pulse"
          >
            <div className="w-12 h-12 rounded-full bg-[#DCDCDC]"></div>
            <div className="flex-grow ml-4 flex flex-col">
              <div className="text-[#FFFFFF] font-bold max-w-[120px] h-4 bg-gray-200 rounded-full mb-2"></div>
              <div className="h-2.5 bg-gray-200 rounded-full max-w-[210px]"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded-full w-8"></div>
          </div>
        ))}
      </>
    );
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
