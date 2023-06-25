import { useLocation } from "react-router-dom";
import { useBooksQuery } from "../services/ApiSlice";

interface ModelBookToPrint {
  id: string;
  bookTitle: string;
  authorName: string;
  publishedDate: string;
  bookCover: string;
  publisher: string;
  pageCount: number;
  description: string;
}

interface ModelDatabaseValues {
  booksToPrint?: ModelBookToPrint[];
  bookDetails?: ModelBookToPrint;
  authorBooks?: ModelBookToPrint[];
  error?: {};
  isSuccess: boolean;
  isLoading:any
}

const useDatabaseValues = (
  bookIdUrl: string = "default",
  authorUrl: string = "default"
): ModelDatabaseValues => {
  const location = useLocation();
  const { data, error, isSuccess, isLoading } = useBooksQuery();

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
        publisher: volume.publisher,
        pageCount: volume.pageCount,
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

  // console.log("bookdetails", authorBooks);

  return { booksToPrint, isLoading, bookDetails, authorBooks, error, isSuccess };
};

export default useDatabaseValues;
