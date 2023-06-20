import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL_DATA =
  "https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyB1MVr2HmehS3G6YXCZn9NXqRHR-wkwM2o&startIndex=0&maxResults=20";

export const columnsApiSlice = createApi({
  reducerPath: "columnsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),

  endpoints: builder => ({
    columns: builder.query<any, void>({
      query: () => "",
    }),
  }),
});

export const { useColumnsQuery } = columnsApiSlice;
