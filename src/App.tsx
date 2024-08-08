import { EllipsisVertical, MessageSquareDiff } from "lucide-react";
import { ChatList } from "./components/ChatList";
import { ChatListSearch } from "./components/ChatListSearch";
import { useEffect } from "react";
import { ChatListFilter } from "./components/ChatListFilter";
import { useChatStore } from "./hooks/useChatStore";
import { useSearchParams } from "react-router-dom";

type QueryParams = { search?: string; filter?: string };

function App() {
  const { fetch, search, filter } = useChatStore();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    const params: QueryParams = {};
    if (search) {
      params.search = search;
    }
    if (filter && filter !== "all") {
      params.filter = filter;
    }

    setSearchParams(params);
  }, [search, filter, setSearchParams]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex border-r border-hd-border h-full w-2/5 bg-[#111A21] hd-background-wpp">
        <div className="flex flex-col w-full">
          <div className="flex w-full items-center justify-between mb-5 pt-3.5 pl-3.5 pr-2">
            <span className="text-hd-icon-light text-[18px] font-bold">Chats</span>
            <div className="flex gap-5 mr-1">
              <MessageSquareDiff className="text-hd-icon-light" />
              <EllipsisVertical className="text-hd-icon-light" />
            </div>
          </div>
          <div className="w-full flex items-center pb-3 pt-3.5 pl-3.5 pr-1">
            <ChatListSearch />
            <ChatListFilter />
          </div>
          <ChatList />
        </div>
      </div>
      <div className="brightness-50 h-full bg-black flex-1 bg-[url('./assets/bgWpp.png')]"></div>
    </div>
  );
}

export default App;
