import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const BookCard = () => {
  const { bookIdUrl } = useParams();
  const { bookDetails } = useDatabaseValues(bookIdUrl);

  return (
    <>
      <Card sx={{ maxWidth: 345, display: "flex" }}>
        {bookDetails?.bookCover === undefined ? (
          <Typography color="error">Brak danych okładki</Typography>
        ) : (
          <img
            src={bookDetails?.bookCover}
            alt="Okładka książki"
            style={{ height: "fit-content" }}
          />
        )}

        <CardContent sx={{ flex: 1 }}>
          {bookDetails?.authorName === undefined ? (
            <Typography variant="h6" color="error">
              "Brak danych"
            </Typography>
          ) : (
            <Typography variant="h6" color="text.secondary">
              {bookDetails?.authorName}
            </Typography>
          )}

          <Typography gutterBottom variant="h5" component="div">
            {bookDetails?.bookTitle}
          </Typography>

          {bookDetails?.description === undefined ? (
            <Typography variant="body2" color="error">
              "Brak danych"
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
