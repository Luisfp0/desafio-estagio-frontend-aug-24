import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const localDate = new Date(
    date.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );
  const localNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );

  const localDateWithoutTime = new Date(
    localDate.getFullYear(),
    localDate.getMonth(),
    localDate.getDate()
  );
  const localNowWithoutTime = new Date(
    localNow.getFullYear(),
    localNow.getMonth(),
    localNow.getDate()
  );

  const diffInMs =
    localNowWithoutTime.getTime() - localDateWithoutTime.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  if (diffInDays === 0) {
    return localDate.toLocaleTimeString("pt-BR", timeOptions);
  } else if (diffInDays === 1) {
    return "Ontem";
  } else if (diffInDays < 7) {
    return localDate.toLocaleDateString("pt-BR", { weekday: "long" });
  } else if (localDate.getFullYear() === localNow.getFullYear()) {
    return localDate.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  } else {
    return localDate.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }
}
