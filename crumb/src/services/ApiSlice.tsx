import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// AIzaSyB1MVr2HmehS3G6YXCZn9NXqRHR - wkwM2o;

const URL_DATA =
  "https://www.googleapis.com/books/v1/volumes?q=pride&download=epub&key=AIzaSyB1MVr2HmehS3G6YXCZn9NXqRHR-wkwM2o&startIndex=22&maxResults=13";

interface Data {
  kind: string;
  titalItems: number;
  items: any[];
}

export const booksApiSlice = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),

  endpoints: builder => ({
    books: builder.query<Data, void>({
      query: () => "",
    }),
  }),
});

export const { useBooksQuery } = booksApiSlice;
