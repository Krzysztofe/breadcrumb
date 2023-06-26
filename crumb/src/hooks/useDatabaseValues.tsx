import { useBooksQuery } from "../services/ApiSlice";

interface ModelBookToPrint {
  id: string;
  bookTitle: string;
  authorName: string;
  publishedDate: string;
  bookCover: string;
  description: string;
}

interface ModelDatabaseValues {
  booksToPrint?: ModelBookToPrint[];
  bookDetails?: ModelBookToPrint;
  authorBooks?: ModelBookToPrint[];
  error?: {};
  isLoading: boolean;
}

const useDatabaseValues = (
  bookIdUrl: string = "default",
  authorUrl: string = "default"
): ModelDatabaseValues => {
  const { data, error, isLoading } = useBooksQuery();

  const volumesData = data?.items?.map((volume: { [key: string]: any }) => {
    return volume?.volumeInfo;
  });

  const booksToPrint = volumesData?.map(
    (volume: { [key: string]: any }, idx: number) => {
      return {
        id: data?.items[idx].id,
        bookTitle: volume.title,
        authorName: volume?.authors?.join(", "),
        publishedDate: volume.publishedDate,
        bookCover: volume.imageLinks.thumbnail,
        description: volume.description,
      };
    }
  );

  const bookDetails = booksToPrint?.find(({ id }) => {
    return id === bookIdUrl;
  });

  const authorBooks =
    authorUrl !== "undefined"
      ? booksToPrint?.filter(({ authorName }) => {
          return authorName?.toLowerCase() === authorUrl?.replaceAll("-", " ");
        })
      : [];

  return { booksToPrint, isLoading, bookDetails, authorBooks, error };
};

export default useDatabaseValues;
