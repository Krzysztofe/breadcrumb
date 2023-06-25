import Typography from "@mui/material/Typography";
import Breadcrumb from "../../components/BreadCrumb";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import BooksTable from "./table/BooksTable";
import PaginationInTable from "./table/PaginationInTable";

const IndexHome = () => {
  const { booksToPrint, error, isLoading } = useDatabaseValues();

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
  } else if (!booksToPrint || booksToPrint.length === 0) {
    tableContent = (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Brak danych</div>
      </div>
    );
  } else {
    tableContent = (
      <BooksTable>
        <PaginationInTable />
      </BooksTable>
    );
  }

  return (
    <main className="">
      <Breadcrumb />
      <Typography variant="h1" component="h1" fontSize="">
        Lista książek
      </Typography>
      {tableContent}
    </main>
  );
};

export default IndexHome;
