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

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  loading: false,
  error: null,
  search: "",
  filter: "all",
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
