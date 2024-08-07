import { Search } from "lucide-react";

type ChatListSearchProps = {
  onSearchChange: (term: string) => void;
  filteredTerm: string;
};

const placeholderTexts: Record<string, string> = {
  all: "Pesquisar",
  unreads: "Pesquisar chats não lidos",
  group: "Pesquisar grupos",
};

export const ChatListSearch: React.FC<ChatListSearchProps> = ({
  onSearchChange,
  filteredTerm,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };
  
  return (
    <div className="relative border-box flex overflow-hidden items-center justify-center w-full">
      <Search className="absolute top-[10px] left-[12px] w-[20px] h-[20px] text-white" />
      <input
        placeholder={placeholderTexts[filteredTerm] || ""}
        onChange={handleChange}
        className="text-white w-full flex items-center border-box pr-[32px] pl-[65px] bg-[#202c33] rounded-[8px] h-[40px]"
      />
    </div>
  );
};
