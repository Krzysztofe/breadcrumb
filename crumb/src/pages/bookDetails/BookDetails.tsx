import { useLocation, useNavigate, useParams } from "react-router-dom";
import Bredcrumb from "../../components/BredCrumb";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookIdUrl } = useParams();

  const { bookDetails, error, isSuccess } = useDatabaseValues(bookIdUrl);

  const handleClick = () => {
    navigate(`${location.pathname}/okladaka`);
  };

  return (
    <>
      <Bredcrumb />
      <h2>Książka pod tytułem "{bookDetails?.bookTitle}"</h2>
      {bookDetails?.description ? (
        <p>{bookDetails?.description}</p>
      ) : (
        <p>Brak opisu</p>
      )}
      <button onClick={handleClick}> Zobacz okładkę</button>
    </>
  );
};

export default BookDetails;
