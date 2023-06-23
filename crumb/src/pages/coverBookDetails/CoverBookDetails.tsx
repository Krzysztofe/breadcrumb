import Bredcrumb from "../../components/BredCrumb";
import useDatabaseValues from "../../hooks/useDatabaseValues";



const CoverBookDetails = () => {
 
  const { bookDetails } = useDatabaseValues();

  return (
    <div>
      <Bredcrumb />
      <img src={bookDetails?.[0]?.bookCover} alt="Okładka książki" />
      {bookDetails?.[0]?.publisher ? (
        <div>Wydawca: {bookDetails?.[0]?.publisher}</div>
      ) : (
        <div>Brak informacji o wydawcy</div>
      )}
    </div>
  );
};

export default CoverBookDetails;
