import { ChatItem } from "@/types/types";

type ChatListItemProps = {
  chat: ChatItem;
};

export const ChatListItem: React.FC<ChatListItemProps> = ({ chat }) => {
  return (
    <div className="flex items-center p-4 border-b border-[#8696A026] bg-[#111A21]">
      <img
        src={chat.contact.photo}
        alt={chat.contact.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-grow ml-4 flex flex-col">
        <div className="text-[#FFFFFF] font-bold">{chat.contact.name}</div>
        <div className="text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[182px]">
          {chat.lastMessage}
        </div>
      </div>
      <div className="text-sm text-gray-500">{chat.lastMessageDate}</div>
      {!chat.read && (
        <div className="ml-2 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
          1
        </div>
      )}
    </div>
  );
};
