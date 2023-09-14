/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line import/no-cycle
import { paginationStep } from "@/components/features/pagination";
import { API_KEY } from "../constants/config";

export const composeUrl = (
  baseUrl: string,
  params: {
    search: string;
    category: string;
    sortingBy: string;
    startIndex?: number;
  },
) => {
  const { search, category, sortingBy, startIndex } = params;
  let url = baseUrl;

  if (search) {
    url += `q=${search.toLowerCase()}`;
  }

  if (category !== "all") {
    url += `+subject:${category.toLowerCase()}`;
  }

  if (sortingBy) {
    url += `&orderBy=${sortingBy.toLowerCase()}`;
  }

  if (startIndex) {
    url += `&startIndex=${String(startIndex)}&maxResults=${paginationStep}`;
  }

  url += `&key=${API_KEY}`;

  return url;
};
