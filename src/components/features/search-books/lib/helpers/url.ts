/* eslint-disable import/prefer-default-export */
import { API_KEY } from "../../config/url";

export const composeUrl = (
  baseUrl: string,
  params: {
    search: string;
    category: string;
    sortingBy: string;
    startIndex?: number;
    step?: number;
  },
) => {
  const { search, category, sortingBy, startIndex = 0, step = 10 } = params;
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

  url += `&startIndex=${String(startIndex)}&maxResults=${String(step)}`;

  url += `&key=${API_KEY}`;

  return url;
};
