import { ListFilter, MessageSquareDot, MessageSquareText, Users } from "lucide-react";
import { useState } from "react";

type ChatListFilterProps = {
  onFilterChange: (term: string) => void;
};

export const ChatListFilter: React.FC<ChatListFilterProps> = ({
  onFilterChange,
}) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleItemClick = (term: string) => {
    onFilterChange(term);
    setOpenFilter(false);
  };

  return (
    <div className="relative w-[50px] flex justify-center text-white z-10">
      <ListFilter
        onClick={() => setOpenFilter(true)}
        className="text-[#E9EDEF] cursor-pointer"
      />
      {openFilter && (
        <div className="absolute top-[26px] left-0 w-[240px] bg-[#233138] rounded-md">
          <ul className="p-[20px] gap-[15px] flex flex-col">
            <h1 className="font-bold">Conversas</h1>
            <li
              onClick={() => handleItemClick("all")}
              className="flex gap-[8px] items-center cursor-pointer"
            >
              <MessageSquareText />
              <span>Todas as conversas</span>
            </li>
            <li
              onClick={() => handleItemClick("unreads")}
              className="flex gap-[8px] items-center cursor-pointer"
            >
              <MessageSquareDot />
              <span>Conversas não lidas</span>
            </li>
            <li
              onClick={() => handleItemClick("group")}
              className="flex gap-[8px] items-center cursor-pointer"
            >
              <Users />
              <span>Grupos</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
