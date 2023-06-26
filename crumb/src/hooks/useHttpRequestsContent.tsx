import useDatabaseValues from "./useDatabaseValues";
import Box from "@mui/material/Box";
import LoadingSpinner from "../components/LoadingSpinner";
import Typography from "@mui/material/Typography";
import React from "react";

const useHttpRequestsContent = (
  JSXContent: React.ReactNode,
  bookIdUrl?: string,
  authorUrl?: string
) => {
  const { booksToPrint, error, isLoading } = useDatabaseValues(
    bookIdUrl,
    authorUrl
  );

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LoadingSpinner />
      </Box>
    );
  } else if (error) {
    if ("status" in error) {
      const errMsg = "status" in error && error.status;

      return (
        <Typography variant="h2" color="error" sx={{ textAlign: "center" }}>
          <> Błąd: {errMsg}</>
        </Typography>
      );
    }
  } else if (!booksToPrint) {
    return (
      <Typography variant="h2" color="error" sx={{ textAlign: "center" }}>
        Brak danych
      </Typography>
    );
  } else {
    return JSXContent;
  }
};

export default useHttpRequestsContent;
