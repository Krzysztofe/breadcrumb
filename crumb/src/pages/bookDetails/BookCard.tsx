import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const BookCard = () => {
  const { bookIdUrl } = useParams();
  const { bookDetails } = useDatabaseValues(bookIdUrl);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: { sm: 500, md: 600 },
          display: "flex",
          boxShadow: { xs: 0, sm: 3 },
          padding: {xs:2}
        }}
      >
        {bookDetails?.bookCover === undefined ? (
          <Typography color="error">Brak okładki</Typography>
        ) : (
          <img
            src={bookDetails?.bookCover}
            alt="Okładka książki"
            style={{ height: "fit-content" }}
          />
        )}

        <CardContent sx={{ flex: 1 }}>
          {!bookDetails?.authorName ? (
            <Typography variant="h2" mb={2} color="error">
              Brak autora
            </Typography>
          ) : (
            <Typography variant="h2" mb={2}>
              {bookDetails?.authorName}
            </Typography>
          )}

          {!bookDetails?.bookTitle ? (
            <Typography variant="h3" color="error">
              Brak tytułu
            </Typography>
          ) : (
            <Typography variant="h3">{bookDetails?.bookTitle}</Typography>
          )}

          {!bookDetails?.description ? (
            <Typography variant="body1" color="error">
              Brak opisu
            </Typography>
          ) : (
            <Typography variant="body1">{bookDetails?.description}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookCard;
