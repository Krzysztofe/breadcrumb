import { useParams } from "react-router-dom";
import Bredcrumb from "../../components/BredCrumb";

import useDatabaseValues from "../../hooks/useDatabaseValues";

const CoverBookDetails = () => {
  const { bookIdUrl } = useParams();
  const { bookDetails, error, isSuccess } = useDatabaseValues(bookIdUrl);

  return (
    <div>
      <Bredcrumb />
      <img src={bookDetails?.bookCover} alt="Okładka książki" />
      {bookDetails?.publisher ? (
        <div>Wydawca: {bookDetails?.publisher}</div>
      ) : (
        <div>Brak informacji o wydawcy</div>
      )}
    </div>
  );
};

export default CoverBookDetails;
