import Bredcrumb from "../../components/BredCrumb";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import BooksTable from "./table/BooksTable";
import PaginationInTable from "./table/PaginationInTable";

const IndexHome = () => {
  const { booksToPrint, error, isSuccess } = useDatabaseValues();

  let tableContent: React.ReactNode = null;

  if (error) {
    if ("error" in error)
      tableContent = (
        <main
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>{(error as { error: string }).error}</div>;
        </main>
      );
  }

  if (booksToPrint?.length === 0) {
    tableContent = (
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Brak danych</div>;
      </main>
    );
  }

  if (!isSuccess) {
    tableContent = (
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingSpinner />
      </main>
    );
  }

  if (isSuccess) {
    tableContent = (
      <main className="">
        <Bredcrumb />
        <BooksTable>
          <PaginationInTable />
        </BooksTable>
      </main>
    );
  }

  return <>{tableContent}</>;
};

export default IndexHome;
