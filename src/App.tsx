import {
  CircleDotDashed,
  EllipsisVertical,
  Megaphone,
  MessageSquareCode,
  MessageSquareDiff,
  MessageSquareText,
  Store,
  Users,
} from "lucide-react";
import { ChatList } from "./compononents/ChatList";
import { ChatListSearch } from "./compononents/ChatListSearch";
import { useEffect, useState } from "react";
import { ChatListFilter } from "./compononents/ChatListFilter";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerm, setFilteredTerm] = useState("");

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
      <div className="flex border-r-[1px] border-[#8696A026] h-full w-[40%] bg-[#111A21]">
        <div className="w-[85px] bg-[#212C33] h-full items-center flex flex-col text-white ">
          <div className="gap-[25px] flex flex-col mt-[10px]">
            <MessageSquareText className="h-[25px] w-[25px]" />
            <CircleDotDashed className="h-[25px] w-[25px]" />
            <MessageSquareCode className="h-[25px] w-[25px]" />
            <Users className="h-[25px] w-[25px]" />
            <hr />
            <Store className="h-[25px] w-[25px]" />
            <Megaphone className="h-[25px] w-[25px]" />
          </div>
        </div>
        <div className="flex flex-col h-[100px] p-[10px]">
          <div className="flex h-[50%] w-full items-center justify-between mb-[20px]">
            <span className="text-[#E9EDEF] text-[18px] font-bold">Chats</span>
            <div className="flex gap-[20px] mr-[15px]">
              <MessageSquareDiff className="text-[#E9EDEF]" />
              <EllipsisVertical className="text-[#E9EDEF]" />
            </div>
          </div>
          <div className="h-[50%] w-full flex items-center">
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
        className={`h-full bg-[#0C141A] w-[60%] bg-[url('./assets/bgWpp.png')]`}
      >
        right
      </div>
    </div>
  );
}

export default App;
