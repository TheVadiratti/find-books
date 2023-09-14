/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */

import { API_KEY } from "../constants/config";

export const composeUrl = (
  baseUrl: string,
  params: { search: string; category: string; sortingBy: string; startIndex?: number },
) => {
  // TODO Исправить хардкод
  const { search, category, sortingBy, startIndex } = params;
  return `${baseUrl}${search && `q=${search.toLowerCase()}`}${category !== "all" && `+subject:${category.toLowerCase()}`}${sortingBy && `&orderBy=${sortingBy.toLowerCase()}`}${startIndex ? `&startIndex=${String(startIndex)}&maxResults=30` : ""}&key=${API_KEY}`;
};
