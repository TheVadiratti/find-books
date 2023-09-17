export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    description?: string;
    authors?: string[];
    categories?: string[];
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    [key: string]: any;
  };
  [key: string]: any;
};
