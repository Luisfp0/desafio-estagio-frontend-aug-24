import { EllipsisVertical, MessageSquareDiff } from "lucide-react";
import { ChatList } from "./components/ChatList";
import { ChatListSearch } from "./components/ChatListSearch";
import { useEffect } from "react";
import { ChatListFilter } from "./components/ChatListFilter";
import { useChatStore } from "./hooks/useChatStore";

function App() {
  const { fetch } = useChatStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex border-r border-hd-border h-full w-2/5 bg-[#111A21]">
        <div className="flex flex-col pt-3.5 pl-3.5 w-full">
          <div className="flex w-full items-center justify-between mb-5">
            <span className="text-[#E9EDEF] text-[18px] font-bold">Chats</span>
            <div className="flex gap-5 mr-1">
              <MessageSquareDiff className="text-[#E9EDEF]" />
              <EllipsisVertical className="text-[#E9EDEF]" />
            </div>
          </div>
          <div className="w-full flex items-center mb-2">
            <ChatListSearch />
            <ChatListFilter />
          </div>
          <ChatList />
        </div>
      </div>
      <div
        className={`brightness-50 h-full bg-[#0C141A] flex-1 bg-[url('./assets/bgWpp.png')]`}
      >
        right
      </div>
    </div>
  );
}

export default App;
