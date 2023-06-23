import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const AuthorDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authorUrl } = useParams();

  const { bookDetails, authorBooks, error, isSuccess } =
    useDatabaseValues(authorUrl);

  const handleBookClick = (id: string) => {
    navigate(`/author/:authorUrl/${id}`);
  };

  return (
    <main>
      {authorBooks?.map(({ bookTitle, authorName, bookCover, id }) => {
        return (
          <div key={crypto.randomUUID()} onClick={() => handleBookClick(id)}>
            tytuł: {bookTitle} &nbsp; imię: {authorName} &nbsp; id: {id}
          </div>
        );
      })}
    </main>
  );
};

export default AuthorDetails;
