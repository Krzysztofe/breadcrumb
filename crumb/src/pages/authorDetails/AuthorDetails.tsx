import {
  useLocation,
  useNavigate
} from "react-router-dom";
import Bredcrumb from "../../components/BredCrumb";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const AuthorDetails = () => {
  const { bookDetails, error, isSuccess } = useDatabaseValues();

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${location.pathname}/okladaka`);
  };

  return (
    <>
      <Bredcrumb />
      <h2>Książka pod tytułem "{bookDetails?.[0]?.title}"</h2>
      {bookDetails?.[0]?.description ? (
        <p>{bookDetails?.[0]?.description}</p>
      ) : (
        <p>Brak opisu</p>
      )}
      <button onClick={handleClick}> Zobacz okładkę</button>
    </>
  );
};

export default AuthorDetails;
