import { useBooksQuery } from "../services/ApiSlice";

interface Volume {
  [key: string]: any;
}

const useDatabaseValues = () => {
  const { data } = useBooksQuery();

  const volumesInfo = data?.items.map((volume: Volume) => {
    return volume?.volumeInfo;
  });

  const booksToPrint = volumesInfo?.map((volume: Volume) => {
    return {
      title: volume.title,
      authors: volume.authors.join(", "),
      publishedDate: volume.publishedDate,
    };
  });

//   const authors

  console.log("eee", data && booksToPrint);

  return { booksToPrint };
};

export default useDatabaseValues;