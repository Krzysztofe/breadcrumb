import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import BookCard from "./BookCard";

const IndexBookDetails = () => {
  const { bookIdUrl } = useParams();

  const { bookDetails, error, isLoading } = useDatabaseValues(bookIdUrl);

  let bookCardContent;

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
  } else if (!bookDetails) {
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
    <main>
      <Container sx={{ padding: { xs: 0, sm: 2 } }}>
        <Breadcrumb />
        {bookCardContent}
      </Container>
    </main>
  );
};

export default IndexBookDetails;
