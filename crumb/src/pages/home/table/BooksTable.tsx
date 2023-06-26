import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { RootState } from "../../../redux/store";
import { Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

const BooksTable = (props: Props) => {
  const navigate = useNavigate();
  const { booksToPrint } = useDatabaseValues();
  const { page, rowsPerPage } = useSelector(
    (state: RootState) => state.tableBooks
  );

  const displayedBooks = booksToPrint?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleBookClick = (id: string) => {
    navigate(`/books/${id}`);
  };

  const handleAuthorClick = (authorName: string) => {
    const authorToUrl = authorName?.replaceAll(" ", "-").toLowerCase();
    navigate(`/author/${authorToUrl}`);
  };

  return (
    <TableContainer sx={{ padding: { xs: 1, sm: 0 } }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {["Nr", "Autor", "Tytuł"].map(header => {
              return (
                <TableCell>
                  <Typography variant="h2"> {header}</Typography>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedBooks?.map(
            ({ id, bookTitle, authorName }: any, idx: number) => {
              return (
                <TableRow
                  key={id}
                  sx={{
                    backgroundColor: idx % 2 === 1 ? "primary.main" : "inherit",
                  }}
                >
                  <TableCell>
                    <Typography>{page * rowsPerPage + idx + 1}</Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => handleAuthorClick(authorName)}
                    sx={{
                      ":hover": { backgroundColor: "secondary.main" },
                      cursor: "pointer",
                    }}
                  >
                    {!authorName ? (
                      <Typography color="error">Brak autora</Typography>
                    ) : (
                      <Typography> {authorName} </Typography>
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleBookClick(id)}
                    sx={{
                      ":hover": { backgroundColor: "secondary.main" },
                      cursor: "pointer",
                    }}
                  >
                    {!bookTitle ? (
                      <Typography color="error">Brak tytułu</Typography>
                    ) : (
                      <Typography>{bookTitle}</Typography>
                    )}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
      {props.children}
    </TableContainer>
  );
};

export default BooksTable;
