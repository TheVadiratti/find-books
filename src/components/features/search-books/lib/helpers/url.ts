/* eslint-disable import/prefer-default-export */
import { paginationStep } from "@/components/features/pagination/config/pagination";
import { API_KEY } from "../../config/url";

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
