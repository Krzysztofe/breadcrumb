import { useLocation, useNavigate, useParams } from "react-router-dom";
import Bredcrumb from "../../components/BredCrumb";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import BookCard from "./BookCard";
import Typography from "@mui/material/Typography";
import LoadingSpinner from "../../components/LoadingSpinner";

const IndexBookDetails = () => {
  const { bookIdUrl } = useParams();

  const { bookDetails, error, isLoading } = useDatabaseValues(bookIdUrl);

  let bookCardContent: React.ReactNode = null;

  if (isLoading) {
    bookCardContent = <LoadingSpinner />;
  } else if (error) {
    bookCardContent = (
      <Typography
        color="error"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Błąd
      </Typography>
    );
  } else if (bookDetails === undefined || bookDetails === null) {
    bookCardContent = (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="error">Brak danych</Typography>
      </div>
    );
  } else {
    bookCardContent = <BookCard />;
  }

  return (
    <>
      <Bredcrumb />
      {bookCardContent}
    </>
  );
};

export default IndexBookDetails;
