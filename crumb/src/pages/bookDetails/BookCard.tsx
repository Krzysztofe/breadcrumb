import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const BookCard = () => {
  const { bookIdUrl } = useParams();
  const { bookDetails } = useDatabaseValues(bookIdUrl);

  return (
    <>
      <Card sx={{ maxWidth: 345, display: "flex" }}>
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
            <Typography variant="h6" color="error">
              Brak autora
            </Typography>
          ) : (
            <Typography variant="h6" >
              {bookDetails?.authorName}
            </Typography>
          )}
          
          {!bookDetails?.bookTitle ? (
            <Typography variant="h5" color="error">
              Brak tytułu
            </Typography>
          ) : (
            <Typography variant="h5">
              {bookDetails?.bookTitle}
            </Typography>
          )}

          {!bookDetails?.description ? (
            <Typography variant="body2" color="error">
              Brak opisu
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {bookDetails?.description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
