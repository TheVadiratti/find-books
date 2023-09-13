/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */

export const composeUrl = (
  baseUrl: string,
  params: { search: string; category: string; sortingBy: string },
) => {
  const { search, category, sortingBy } = params;
  return `${baseUrl}${search && `q=${search.toLowerCase()}${category && `+subject:${category.toLowerCase()}`}${sortingBy && `&orderBy=${sortingBy.toLowerCase()}`}`
  }`;
};
