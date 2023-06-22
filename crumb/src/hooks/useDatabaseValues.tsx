import { useBooksQuery } from "../services/ApiSlice";

interface Volume {
  [key: string]: any;
}

const useDatabaseValues = (authorURL: any = "default") => {
  const { data } = useBooksQuery();
  const authorNameURL = authorURL?.replaceAll("_", " ");

  const volumesData = data?.items?.map((volume: Volume) => {
    return volume?.volumeInfo;
  });

  const booksToPrint = volumesData?.map((volume: Volume) => {
    return {
      id: crypto.randomUUID(),
      title: volume.title,
      authorName: volume?.authors?.join(", "),
    //   date: volume.publishedDate,
    //   bookCover: volume.imageLinks.thumbnail,
    //   publisher: volume.publisher,
    //   pageCount: volume.pageCount,
    //   description: volume.description,
    };
  });

  const bookDetails = booksToPrint?.filter(({ authorName }) => {
    return authorName === authorNameURL;
  });

  // console.log("eee", data && volumesData);
  //   console.log("print", data && booksToPrint);

  return { booksToPrint, bookDetails };
};

export default useDatabaseValues;
