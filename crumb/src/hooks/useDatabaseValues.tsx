import { useBooksQuery } from "../services/ApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface ModelBookToPrint {
  id: string;
  title: string;
  authorName: string;
  date: string;
  bookCover: string;
  publisher: string;
  pageCount: number;
  description: string;
}

interface ModelDatabaseValues {
  booksToPrint?: ModelBookToPrint[];
  bookDetails?: ModelBookToPrint[];
  bookID?: ModelBookToPrint[];
  error?: {};
  isSuccess: boolean;
}

const useDatabaseValues = (authorURL: any = "default"): ModelDatabaseValues => {
  const { bookId } = useSelector((state: RootState) => state.tableBooks);
  const { data, error, isSuccess } = useBooksQuery();
  const authorNameURL = authorURL?.replaceAll("_", " ");

  const volumesData = data?.items?.map((volume: { [key: string]: any }) => {
    return volume?.volumeInfo;
  });

  const booksToPrint = volumesData?.map(
    (volume: { [key: string]: any }, idx: number) => {
      return {
        id: data?.items[idx].id,
        title: volume.title,
        authorName: volume?.authors?.join(", "),
        date: volume.publishedDate,
        bookCover: volume.imageLinks.thumbnail,
        publisher: volume.publisher,
        pageCount: volume.pageCount,
        description: volume.description,
      };
    }
  );

  const bookDetails = booksToPrint?.filter(({ id }) => {
    return id === bookId;
  });

    // console.log("eee", bookId);

  return { booksToPrint, bookDetails, error, isSuccess };
};

export default useDatabaseValues;
