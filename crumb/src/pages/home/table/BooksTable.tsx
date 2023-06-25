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
          {displayedBooks?.map(
            ({ id, bookTitle, authorName }: any, idx: number) => {
              return (
                <TableRow
                  key={id}
                  //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{page * rowsPerPage + idx + 1}</TableCell>
                  <TableCell
                    onClick={() => handleAuthorClick(authorName)}
                    sx={{
                      ":hover": {
                        backgroundColor: theme => theme.palette.secondary.main,
                      },
                      cursor: "pointer",
                    }}
                  >
                    {!authorName ? (
                      <Typography color="error">Brak autora</Typography>
                    ) : (
                      authorName
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleBookClick(id)}
                    sx={{
                      ":hover": { backgroundColor: "red" },
                      cursor: "pointer",
                    }}
                  >
                    {!bookTitle ? (
                      <Typography color="error">Brak tytułu</Typography>
                    ) : (
                      bookTitle
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
