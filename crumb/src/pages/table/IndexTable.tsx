import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import PaginationInTable from "./PaginationInTable";
import Bred from "../../components/BredCrumb";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { handleGetBookId } from "../../redux/storeFeatures/tableBooksSlice";
import Bredcrumb from "../../components/BredCrumb";

const IndexTable = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { booksToPrint, error, isSuccess } = useDatabaseValues();
  const displayedBooks = booksToPrint?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleRowClick = (authorName: string, id: string) => {
    const authorInUrl = authorName?.replaceAll(" ", "_").toLowerCase();
    dispatch(handleGetBookId(id));

    authorName === undefined
      ? navigate(`/brak_danych_autora`)
      : navigate(`/${String(authorInUrl)}`);
  };



  let tableContent: React.ReactNode = null;

  if (error) {
    if ("error" in error)
      tableContent = <div>{(error as { error: string }).error}</div>;
  }

  if (booksToPrint?.length === 0) {
    tableContent = <div>Brak danych</div>;
  }

  if (!isSuccess) {
    tableContent = <div>eeeeeeee</div>;
  }

  if (isSuccess) {
    tableContent = (
      <main className="">
       
        <Bredcrumb />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nr</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell>Tytuł</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedBooks?.map(({ id, title, authorName }, idx) => {
                return (
                  <TableRow
                    key={id}
                    onClick={() => handleRowClick(authorName, id)}
                    //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{page * rowsPerPage + idx + 1}</TableCell>
                    <TableCell>
                      {authorName === undefined
                        ? "Brak danych autora"
                        : authorName}
                    </TableCell>
                    <TableCell>
                      {title === undefined ? "Brak danych tytułu" : title}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <PaginationInTable
            booksToPrint={booksToPrint}
            page={page}
            handleChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </main>
    );
  }

  return <>{tableContent}</>;
};

export default IndexTable;

// const columns: GridColDef[] = [
//   { field: "number", headerName: "No", width: 70 },
//   {
//     field: "authorName",
//     headerName: "Author",
//     width: 130,
//     headerClassName: "table-header",
//     cellClassName: "table-cell",
//     valueGetter: (params: GridValueGetterParams) => {
//       return params.row.authorName || "No data";
//     },
//   },
//   {
//     field: "title",
//     headerName: "Title",
//     width: 130,
//     valueGetter: (params: GridValueGetterParams) => {
//       return params.row.authorName || "No data";
//     },
//   },
// ];

// export default function DataTable() {
//   const { authorURL } = useParams();
//   const { bookDetails, booksToPrint } = useDatabaseValues(authorURL);

//   const rowsWithNumbers = booksToPrint?.map((book, index) => ({
//     ...book,
//     number: index + 1,
//   }));

//   console.log("", DataGrid);

//   const handleRowClick = (params: any) => {
//     console.log("Clicked row:", params.row.authorName);
//   };

//   const rowClassName = (params: any) => {
//     return (params.rowIndex = "tableRow");
//   };

//   useEffect(() => {
//     const styleElement = document.createElement("style");
//     styleElement.innerHTML = `
// .MuiToolbar-root{
//     color: red;
//     font-size: 30px;
// }

//       .MuiTablePagination-select {

//       }
//       .MuiTablePagination-selectLabel {
//       font-size: 30px;
//       }
//        .MuiTablePagination-selectLabel::before {
//         content: " ";

//     `;
//     document.head.appendChild(styleElement);

//     return () => {
//       document.head.removeChild(styleElement);
//     };
//   }, []);

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <BredCrumbs />
//       <DataGrid
//         rows={rowsWithNumbers ?? []}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         onRowClick={handleRowClick}
//         pageSizeOptions={[5, 10]}
//         getRowClassName={rowClassName}
//         componentsProps={{
//           pagination: {
//             className: "custom-pagination",
//           },
//         }}

//         // components={{ Pagination: TablePagination }}
//       />
//       <TablePaginationDemo />
//     </div>
//   );
// }
