import {
  EllipsisVertical,
  MessageSquareDiff,
} from "lucide-react";
import { ChatList } from "./components/ChatList";
import { ChatListSearch } from "./components/ChatListSearch";
import { useEffect, useState } from "react";
import { ChatListFilter } from "./components/ChatListFilter";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("search") || "");
  const [filteredTerm, setFilteredTerm] = useState(() => searchParams.get("filter") || "all");

  useEffect(() => {
    const params: { search?: string; filter?: string } = {};
    if (searchTerm) params.search = searchTerm;
    if (filteredTerm && filteredTerm !== "all") params.filter = filteredTerm;

    setSearchParams(params);
  }, [searchTerm, filteredTerm, setSearchParams]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilteredTerm = (term: string) => {
    setFilteredTerm(term);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex border-r border-hd-border h-full w-2/5 bg-[#111A21]">
        <div className="flex flex-col p-2.5 w-full">
          <div className="flex w-full items-center justify-between mb-5">
            <span className="text-[#E9EDEF] text-[18px] font-bold">Chats</span>
            <div className="flex gap-5 mr-7">
              <MessageSquareDiff className="text-[#E9EDEF]" />
              <EllipsisVertical className="text-[#E9EDEF]" />
            </div>
          </div>
          <div className="w-full flex items-center">
            <ChatListSearch
              onSearchChange={handleSearchChange}
              filteredTerm={filteredTerm}
            />
            <ChatListFilter onFilterChange={handleFilteredTerm} />
          </div>
          <ChatList searchTerm={searchTerm} filteredTerm={filteredTerm} />
        </div>
      </div>
      <div
        className={`h-full bg-[#0C141A] flex-1 bg-[url('./assets/bgWpp.png')]`}
      >
        right
      </div>
    </div>
  );
}

export default App;
