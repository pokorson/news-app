import apiClient from "../apiClient";
import { subMonths, subWeeks, startOfDay } from "date-fns";

import { ArticleFilters } from "./types";

const formatDate = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

const parseDateRange = (dateRange: string) => {
  const nowISO = formatDate(new Date());
  switch (dateRange) {
    case "month":
      return {
        to: nowISO,
        from: formatDate(subMonths(new Date(), 1))
      };
    case "week":
      return {
        to: nowISO,
        from: formatDate(subWeeks(new Date(), 1))
      };
    case "day":
      return {
        to: nowISO,
        from: formatDate(startOfDay(new Date()))
      };
    default:
      return {
        to: nowISO,
        from: formatDate(subMonths(new Date(), 1))
      };
  }
};

export const buildQuery = ({
  filters,
  page
}: {
  filters: ArticleFilters;
  page: number;
}) => {
  let query = `page=${page}&q=${filters.topic}`;

  if (filters.sortBy) {
    query = `${query}&sortBy=${filters.sortBy}`;
  }
  if (filters.date) {
    const { from, to } = parseDateRange(filters.date);
    query = `${query}&from=${from}&to=${to}`;
  }

  return query;
};

export const fetchArticles = ({
  filters,
  page = 1
}: {
  filters: ArticleFilters;
  page: number;
}) => {
  const query = buildQuery({ filters, page });

  return apiClient
    .get(`/everything?${query}`)
    .then(response => response.data.articles);
};
