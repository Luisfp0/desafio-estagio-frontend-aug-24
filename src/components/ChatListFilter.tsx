import { useChatStore } from "@/hooks/useChatStore";
import { FilterOptions } from "@/types";
import {
  ListFilter,
  MessageSquareDot,
  MessageSquareText,
  Users,
} from "lucide-react";
import { ElementType } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const filterOptions: FilterOptions[] = ["all", "unreads", "group"];

type OptionData = {
  label: string;
  icon: ElementType;
};

const options: Record<FilterOptions, OptionData> = {
  all: {
    label: "Todas as conversas",
    icon: MessageSquareText,
  },
  unreads: {
    label: "Conversas não lidas",
    icon: MessageSquareDot,
  },
  group: {
    label: "Grupos",
    icon: Users,
  },
};

export const ChatListFilter = () => {
  const { setFilter } = useChatStore();

  const handleItemClick = (term: FilterOptions) => {
    setFilter(term);
  };

  return (
    <div className="relative w-[50px] flex justify-center text-white z-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="">
            <ListFilter className="text-[#E9EDEF] cursor-pointer" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-[#233138] border-none text-white rounded-xm py-3 px-0"
        >
          <DropdownMenuLabel className="text-xl text-[#B6BDC0] px-8">
            Conversas
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {filterOptions.map((optionKey) => {
              const { label, icon: Icon } = options[optionKey];
              return (
                <DropdownMenuItem
                  key={optionKey}
                  onClick={() => handleItemClick(optionKey)}
                  className="hover:bg-[#182229] gap-2 py-2 px-8 rounded-none"
                >
                  <Icon className="size-4 text-[#74848c]" />
                  <span className="text-lg text-[#74848c]">{label}</span>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
