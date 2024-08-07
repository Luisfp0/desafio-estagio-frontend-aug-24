import { useEffect, useState } from "react";
import { ChatItem } from "@/types";

export const useChats = () => {
  const [data, setData] = useState<ChatItem[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          `${import.meta.env.VITE_BASE_URL}/Contacts`
        );
        const data = await result.json();

        setData(data);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setData, setError]);

  return { data, error, loading };
};
