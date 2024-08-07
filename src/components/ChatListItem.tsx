import { formatWhatsAppDate } from "@/lib/utils";
import { ChatItem } from "@/types";
import { User } from "lucide-react";

type ChatListItemProps = Pick<
  ChatItem,
  "name" | "lastMessage" | "lastMessageDate" | "read" | "photo"
>;

export const ChatListItem: React.FC<ChatListItemProps> = ({
  name,
  lastMessage,
  lastMessageDate,
  read,
  photo,
}) => {
  return (
    <div className="gap-4 flex items-center p-4 border-b border-[#8696A026] bg-[#111A21]">
      {photo ? (
        <img src={photo} alt={name} className="size-12 rounded-full" />
      ) : (
        <div className="flex items-center justify-center size-12 rounded-full bg-slate-300">
          <User />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="text-[#FFFFFF] font-bold">{name}</div>
        <div className="text-gray-500 truncate">{lastMessage}</div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="text-sm text-gray-500">
          {formatWhatsAppDate(lastMessageDate)}
        </div>
        {!read && (
          <div className="bg-[#00A884] rounded-full size-6 flex items-center justify-center">
            <span>2</span>
          </div>
        )}
      </div>
    </div>
  );
};
