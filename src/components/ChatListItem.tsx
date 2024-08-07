import { formatWhatsAppDate } from "@/lib/utils";
import { ChatItem } from "@/types";
import { User } from "lucide-react";
import { memo } from "react";

type ChatListItemProps = Pick<
  ChatItem,
  "name" | "lastMessage" | "lastMessageDate" | "read" | "photo"
>;

export const ChatListItem: React.FC<ChatListItemProps> = memo(
  ({ name, lastMessage, lastMessageDate, read, photo }) => {
    return (
      <div className="gap-4 flex items-center p-4 border-b border-[#8696A026] bg-[#111A21] hover:bg-[#2A3942] cursor-pointer">
        {photo ? (
          <div className="relative">
            <div className="flex items-center justify-center size-12 rounded-full bg-slate-300 absolute z-0 top-0 left-0">
              <User />
            </div>
            <img
              loading="lazy"
              src={photo}
              alt={name}
              className="size-12 rounded-full z-10 relative"
            />
          </div>
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
  }
);
