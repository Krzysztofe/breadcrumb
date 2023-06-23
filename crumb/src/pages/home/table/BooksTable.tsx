import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

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
    navigate(`/book/${id}`);
  };

  const handleAuthorClick = (authorName: string) => {
    navigate(`/author/${authorName}`);
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
                  // onClick={() => props.handleRowClick(id)}
                  //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{page * rowsPerPage + idx + 1}</TableCell>
                  <TableCell onClick={() => handleAuthorClick(authorName)}>
                    {authorName === undefined
                      ? "Brak danych autora"
                      : authorName}
                  </TableCell>
                  <TableCell onClick={() => handleBookClick(id)}>
                    {bookTitle === undefined ? "Brak danych tytułu" : bookTitle}
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
