import { formatWhatsAppDate } from "@/lib/utils";
import { ChatItem } from "@/types";

type ChatListItemProps = {
  chat: ChatItem;
};

export const ChatListItem: React.FC<ChatListItemProps> = ({ chat }) => {
  return (
    <div className="gap-4 flex items-center p-4 border-b border-[#8696A026] bg-[#111A21]">
      <img
        src={"https://placehold.co/48x48"}
        alt={chat.name}
        className="size-12 rounded-full"
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="text-[#FFFFFF] font-bold">{chat.name}</div>
        <div className="text-gray-500 truncate">{chat.lastMessage}</div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="text-sm text-gray-500">
          {formatWhatsAppDate(chat.lastMessageDate)}
        </div>
        {!chat.read && (
          <div className="bg-[#00A884] rounded-full size-6 flex items-center justify-center">
            <span>2</span>
          </div>
        )}
      </div>
    </div>
  );
};