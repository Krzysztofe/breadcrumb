import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import useDatabaseValues from "../hooks/useDatabaseValues";

const Bredcrumb = () => {
  const { bookIdUrl, authorUrl } = useParams();
  const location = useLocation();
  const { bookDetails, authorBooks } = useDatabaseValues(bookIdUrl, authorUrl);

  const crumbs = location.pathname.split("/").filter(crumb => crumb !== "");

  let currentLink = "";

  const crumbsToPrint = crumbs.map((crumb, idx) => {
    currentLink += `/${crumb}`;

    let crumbToPrint = crumb;

    if (crumb === "undefined") {
      crumbToPrint = "Brak danych";
    } else if (crumbs.length === 3 && idx === crumbs.length - 1) {
      crumbToPrint = bookDetails?.bookTitle ?? "";
    } else if (crumbs.includes("author")) {
      crumbToPrint = authorBooks?.[0]?.authorName ?? "";
    } else if (crumbs.includes("books")) {
      crumbToPrint = bookDetails?.bookTitle ?? "";
    }

    if (crumb === "author" || crumb === "books") {
      return null;
    }

    if (idx === crumbs.length - 1) {
      return <Typography key={crypto.randomUUID()}>{crumbToPrint}</Typography>;
    } else {
      return (
        <RouterLink
          key={crypto.randomUUID()}
          to={currentLink}
          style={{ cursor: "pointer" }}
        >
          {crumbToPrint}
        </RouterLink>
      );
    }
  });

  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="bredcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {location.pathname === "/" ? (
          <Typography>Lista</Typography>
        ) : (
          <RouterLink to={`/`} style={{ cursor: "pointer" }}>
            Lista
          </RouterLink>
        )}

        {crumbsToPrint}
      </Breadcrumbs>
    </Box>
  );
};

export default Bredcrumb;
