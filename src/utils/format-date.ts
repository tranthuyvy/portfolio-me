export function formatDate(date: Date): string {
    const formattedDate = `${date.toLocaleString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })} lúc ${date.toLocaleString("vi-VN", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  
    return formattedDate;
  }
  