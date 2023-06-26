import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import AuthorTable from "./AuthorTable";
import Container from "@mui/material/Container";

const IndexAuthorDetails = () => {
  const { bookIdUrl, authorUrl } = useParams();
  const { authorBooks, error, isLoading } = useDatabaseValues(
    bookIdUrl,
    authorUrl
  );

  let tableContent;

  if (isLoading) {
    tableContent = <LoadingSpinner />;
  } else if (error) {
    tableContent = (
      <Typography
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
  } else if (!authorBooks || authorBooks.length === 0) {
    tableContent = (
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Brak danych</div>
      </main>
    );
  } else {
    tableContent = <AuthorTable />;
  }

  return (
    <main>
      <Container sx={{ padding: { xs: 0, sm: 2 } }}>
        <Breadcrumb />
        <Typography
          variant="h1"
          component = "h2"
          sx={{ padding: { xs: 1}, paddingLeft: { xs: 1, sm: 0 } }}
        >
          Lista książek autora
        </Typography>
        {tableContent}
      </Container>
    </main>
  );
};

export default IndexAuthorDetails;
