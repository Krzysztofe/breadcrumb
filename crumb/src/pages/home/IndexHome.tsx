import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumb from "../../components/BreadCrumb";
import useHttpRequestsContent from "../../hooks/useHttpRequestsContent";
import BooksTable from "./table/BooksTable";
import PaginationInTable from "./table/PaginationInTable";

const IndexHome = () => {
 
  const tableContent = useHttpRequestsContent(
    <BooksTable>
      <PaginationInTable />
    </BooksTable>
  );
  
  return (
    <main>
      <Container sx={{ padding: { xs: 0, sm: 2 } }}>
        <Breadcrumb />
        <Typography
          variant="h1"
          component="h1"
          sx={{ padding: { xs: 1 }, paddingLeft: { xs: 1, sm: 0 } }}
        >
          Lista książek
        </Typography>
        {tableContent}
      </Container>
    </main>
  );
};

export default IndexHome;

