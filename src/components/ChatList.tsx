import { useChatStore } from "@/hooks/useChatStore";
import { ChatListItem } from "./ChatListItem";
import { useMemo } from "react";

export const ChatList = () => {
  const { chats: data, loading, error, search, filter } = useChatStore();

  const chats = useMemo(() => {
    if (!data) {
      return [];
    }
    return data
      .filter((chat) => {
        const nameMatch = chat.name
          .toLowerCase()
          .includes(search.toLowerCase());

        let additionalFilterMatch = false;
        if (filter === "all") {
          additionalFilterMatch = true;
        } else if (filter === "group") {
          additionalFilterMatch = chat.type === "GROUP";
        } else if (filter === "unreads") {
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
  }, [data, search, filter]);

  if (loading) {
    const skeletonsCount = Array.from(new Array(12));
    return (
      <>
        {skeletonsCount.map((_, index) => (
          <div
            key={index}
            role="status"
            className="flex items-center p-4 border-b border-hd-border animate-pulse"
          >
            <div className="w-12 h-12 rounded-full bg-[#DCDCDC]"></div>
            <div className="flex-grow ml-4 flex flex-col">
              <div className="text-white font-bold max-w-[120px] h-4 bg-gray-200 rounded-full mb-2"></div>
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
      {chats.map((chat) => (
        <ChatListItem
          key={chat.id}
          name={chat.name}
          photo={chat.photo}
          message={chat.message}
          lastMessageDate={chat.lastMessageDate}
          read={chat.read}
          type={chat.type}
        />
      ))}
    </div>
  );
};
