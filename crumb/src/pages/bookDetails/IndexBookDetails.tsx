import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import useHttpRequestsContent from "../../hooks/useHttpRequestsContent";
import BookCard from "./BookCard";

const IndexBookDetails = () => {
  const { bookIdUrl, authorUrl } = useParams();

  const bookDetails = useHttpRequestsContent(
    <BookCard />,
    bookIdUrl,
    authorUrl
  );

  return (
    <main>
      <Container sx={{ padding: { xs: 0, sm: 2 } }}>
        <Breadcrumb />
        {bookDetails}
      </Container>
    </main>
  );
};

export default IndexBookDetails;
