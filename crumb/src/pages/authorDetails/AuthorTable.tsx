import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const AuthorTable = () => {
  const navigate = useNavigate();
  const { bookIdUrl, authorUrl } = useParams();

  const { authorBooks } = useDatabaseValues(bookIdUrl, authorUrl);

  const handleBookClick = (id: string) => {
    navigate(`/author/${authorUrl}/${id}`);
  };

  return (
    <TableContainer
      sx={{ padding: { xs: 1, sm:0 } }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {["Nr", "Autor", "Tytuł", "Rok wydania"].map(header => {
              return (
                <TableCell>
                  <Typography variant="h2">{header}</Typography>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {authorBooks?.map(
            ({ bookTitle, authorName, id, publishedDate }, idx) => {
              return (
                <TableRow
                  key={id}
                  onClick={() => handleBookClick(id)}
                  sx={{
                    ":hover": { backgroundColor: "secondary.main" },
                    cursor: "pointer",
                    backgroundColor: idx % 2 === 1 ? "primary.main" : "inherit",
                  }}
                >
                  <TableCell>
                    <Typography> {idx + 1} </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{authorName}</Typography>
                  </TableCell>
                  <TableCell>
                    {!bookTitle ? (
                      <Typography style={{ color: "red" }}>
                        Brak tytułu
                      </Typography>
                    ) : (
                      <Typography>{bookTitle}</Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    {!publishedDate ? (
                      <Typography style={{ color: "red" }}>
                        Brak daty
                      </Typography>
                    ) : (
                      <Typography>{publishedDate}</Typography>
                    )}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AuthorTable;
