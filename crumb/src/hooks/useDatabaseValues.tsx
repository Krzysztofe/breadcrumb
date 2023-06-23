import { useBooksQuery } from "../services/ApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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
}

const useDatabaseValues = (bookIdUrl: any = "default"): ModelDatabaseValues => {

  const { data, error, isSuccess } = useBooksQuery();



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

  const authorBooks = booksToPrint?.filter(({authorName }) => {
    return authorName === bookIdUrl;
  });


//   console.log("", authorBooks);
//   console.log("", bookDetails);

  return { booksToPrint, bookDetails,authorBooks, error, isSuccess };
};

export default useDatabaseValues;
