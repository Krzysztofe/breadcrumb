import Typography from "@mui/material/Typography";
import Bredcrumb from "../../components/BredCrumb";
import AuthorTable from "./AuthorTable";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import LoadingPage from "../loadingPage/LoadingPage";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const IndexAuthorDetails = () => {
  const { bookIdUrl, authorUrl } = useParams();
  const {
    authorBooks = [],
    error,
    isLoading,
  } = useDatabaseValues(bookIdUrl, authorUrl);

  let tableContent: React.ReactNode = null;

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
  } else if (authorBooks === undefined || authorBooks.length === 0) {
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
    tableContent = (
      <>
      
        <AuthorTable />
      </>
    );
  }

  return (
    <main>
      <Bredcrumb />
      <Typography variant="h2" component="h2" fontSize="">
        Lista książek wybranego autora
      </Typography>
      {tableContent}
    </main>
  );
};

export default IndexAuthorDetails;
