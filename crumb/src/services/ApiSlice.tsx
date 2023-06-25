import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BOOKS_DATA } from "../data/apiKeys";



interface Data {
  kind: string;
  titalItems: number;
  items: any[];
}

export const booksApiSlice = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_BOOKS_DATA }),

  endpoints: builder => ({
    books: builder.query<Data, void>({
      query: () => "",
    }),
  }),
});

export const { useBooksQuery } = booksApiSlice;
