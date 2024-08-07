import { create } from "zustand";
import { ChatItem, FilterOptions } from "@/types";

interface ChatState {
  chats: ChatItem[];
  fetch: () => void;
  loading: boolean;
  error: any;
  search: string;
  filter: FilterOptions;
  setSearch: (newSearchTerm: string) => void;
  setFilter: (newFilteredTerms: FilterOptions) => void;
}

const urlParams = new URLSearchParams(window.location.search);

const getFilterFromUrl = () => {
  const validFilters = ["all", "group", "unreads"];
  const urlFilter = urlParams.get("filter") || "all";
  if (validFilters.includes(urlFilter)) {
    return urlFilter as FilterOptions;
  }
  return "all";
};

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  loading: false,
  error: null,
  search: urlParams.get("search") || "",
  filter: getFilterFromUrl(),
  setSearch: (newSearchTerm) =>
    set((state) => ({ ...state, search: newSearchTerm })),

  setFilter: (newFilteredTerms) =>
    set((state) => ({ ...state, filter: newFilteredTerms })),

  fetch: async () => {
    set((state) => ({ ...state, loading: true }));
    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/Contacts`);
      const data = await result.json();

      set((state) => ({ ...state, chats: data }));
    } catch (err) {
      set((state) => ({ ...state, error: err }));
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
