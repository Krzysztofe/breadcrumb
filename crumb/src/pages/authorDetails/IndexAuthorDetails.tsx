import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import useHttpRequestsContent from "../../hooks/useHttpRequestsContent";
import AuthorTable from "./AuthorTable";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const IndexAuthorDetails = () => {
  const { bookIdUrl, authorUrl } = useParams();
  const { authorBooks } = useDatabaseValues(bookIdUrl, authorUrl);
  const tableContent = useHttpRequestsContent(
    <AuthorTable />,
    bookIdUrl,
    authorUrl
  );

  return (
    <main>
      <Container sx={{ padding: { xs: 0, sm: 2 } }}>
        <Breadcrumb />
        <Typography
          variant="h1"
          component="h2"
          sx={{ padding: { xs: 1 }, paddingLeft: { xs: 1, sm: 0 } }}
        >
          Lista książek autora
        </Typography>

        {authorBooks?.length === 0 ? (
          <Typography variant="h2" color="error" sx={{ textAlign: "center" }}>
            Brak danych
          </Typography>
        ) : (
          tableContent
        )}
      </Container>
    </main>
  );
};

export default IndexAuthorDetails;
