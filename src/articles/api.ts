import apiClient from "../apiClient";
import { subMonths, subWeeks, startOfDay } from "date-fns";

const parseDateRange = (dateRange: any) => {
  const now = new Date();
  const nowISO = now.toISOString();
  switch (dateRange) {
    case "month":
      return {
        from: nowISO,
        to: subMonths(now, 1).toISOString()
      };
    case "week":
      return {
        to: nowISO,
        from: subWeeks(now, 1).toISOString()
      };
    case "day":
      return {
        to: nowISO,
        from: startOfDay(now).toISOString()
      };
    default:
      return {
        to: nowISO,
        from: subMonths(now, 1).toISOString()
      };
  }
};

export const fetchArticles = ({
  filters,
  page = 1
}: {
  filters: any;
  page: number;
}) => {
  let query = `page=${page}&q=${filters.topic.value}`;
  if (filters.sortBy) {
    query = `${query}&sortBy=${filters.sortBy.value}`;
  }
  if (filters.date) {
    const { from, to } = parseDateRange(filters.date);
    query = `${query}&from=${from}&to=${to}`;
  }
  return apiClient
    .get(`/everything?${query}`)
    .then(response => response.data.articles);
};
