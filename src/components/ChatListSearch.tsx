import { useChatStore } from "@/hooks/useChatStore";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholderTexts: Record<string, string> = {
  all: "Pesquisar",
  unreads: "Pesquisar chats não lidos",
  group: "Pesquisar grupos",
};

export const ChatListSearch = () => {
  const { search, setSearch, filter } = useChatStore();
  const [inputFocus, setInputFocus] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="relative flex overflow-hidden items-center justify-center w-full">
      <AnimatePresence>
      {inputFocus ? (
          <motion.div
            key="arrow"
            initial={{ rotate: -70, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[10px] left-[12px]"
          >
            <ArrowLeft className="text-[#00a884] size-5 cursor-pointer" />
          </motion.div>
        ) : (
          <motion.div
            key="search"
            initial={{ rotate: -50, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[10px] left-[12px]"
          >
            <Search className="size-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
      <Input
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        placeholder={placeholderTexts[filter] || ""}
        value={search}
        onChange={handleChange}
        className="border-0 text-white w-full flex items-center pl-[55px] bg-[#202c33] rounded-[8px] h-[40px]"
      />
    </div>
  );
};
