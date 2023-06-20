import { useBooksQuery } from "../services/ApiSlice";

interface Volume {
  [key: string]: any;
}

const useDatabaseValues = (authorURL:any = "default") => {
  const { data } = useBooksQuery();
 
  const authorNameURL = authorURL?.replaceAll("_", " ");

  const volumesInfo = data?.items.map((volume: Volume) => {
    return volume?.volumeInfo;
  });

  const booksToPrint = volumesInfo?.map((volume: Volume) => {
    return {
      title: volume.title,
      authorName: volume.authors.join(", "),
      date: volume.publishedDate,
    };
  });

const bookDetails = booksToPrint?.filter(({authorName}) => {
return authorName === authorNameURL;
})



//   console.log("eee", data && bookDetails);

  return { booksToPrint, bookDetails };
};

export default useDatabaseValues;
