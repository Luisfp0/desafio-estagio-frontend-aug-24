import { useChatStore } from "@/hooks/useChatStore";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const placeholderTexts: Record<string, string> = {
  all: "Pesquisar",
  unreads: "Pesquisar chats não lidos",
  group: "Pesquisar grupos",
};

export const ChatListSearch = () => {
  const { search, setSearch, filter } = useChatStore();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="relative flex overflow-hidden items-center justify-center w-full">
      <Search className="absolute top-[10px] left-[12px] size-5 text-white" />
      <Input
        placeholder={placeholderTexts[filter] || ""}
        value={search}
        onChange={handleChange}
        className="border-0 text-white w-full flex items-center pl-[55px] bg-[#202c33] rounded-[8px] h-[40px]"
      />
    </div>
  );
};
