import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import AuthorTable from "./AuthorTable";

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
      <Breadcrumb />
      <Typography variant="h2" component="h2" fontSize="">
        Lista książek wybranego autora
      </Typography>
      {tableContent}
    </main>
  );
};

export default IndexAuthorDetails;
