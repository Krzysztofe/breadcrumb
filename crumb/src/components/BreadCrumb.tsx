import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import useDatabaseValues from "../hooks/useDatabaseValues";

const Breadcrumb = () => {
  const { bookIdUrl, authorUrl } = useParams();
  const location = useLocation();
  const { bookDetails, authorBooks } = useDatabaseValues(bookIdUrl, authorUrl);

  let currentLink = "";

  const crumbs = location.pathname.split("/").filter(crumb => crumb !== "");

  const crumbsToPrint = crumbs.map((crumb, idx) => {
    currentLink += `/${crumb}`;

    let crumbsToPrint;

    if (bookDetails?.authorName === undefined && authorBooks?.length === 0) {
      crumbsToPrint = <Typography color="error"> Brak danych </Typography>;
    } else if (crumb === "undefined") {
      crumbsToPrint = <Typography color="error"> Brak danych </Typography>;
    } else if (crumbs.length === 3 && idx === crumbs.length - 1) {
      crumbsToPrint = bookDetails?.bookTitle ?? "";
    } else if (crumbs.includes("author")) {
      crumbsToPrint = authorBooks?.[0]?.authorName ?? "";
    } else if (crumbs.includes("books")) {
      crumbsToPrint = bookDetails?.bookTitle ?? "";
    }

    if (crumb === "author" || crumb === "books") {
      return null;
    }

    if (idx === crumbs.length - 1) {
      return (
        <Typography
          key={crypto.randomUUID()}
          variant="body1"
          sx={{
            fontSize: "2rem",
            ":hover": { color: "red" },
            cursor: "pointer",
            color: "olive",
          }}
        >
          {crumbsToPrint}
        </Typography>
      );
    } else {
      return (
        <RouterLink
          key={crypto.randomUUID()}
          to={currentLink}
          // style={{ fontSize: "2rem", cursor: "pointer" }}
        >
          <Typography
            sx={{
              ":hover": { color: "red" },
              cursor: "pointer",
              color: "olive",
              fontSize: "2rem"
            }}
          >
            {crumbsToPrint}
          </Typography>
        </RouterLink>
      );
    }
  });

  return (
    <Box my={2} p={2} bgcolor="primary.main">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {location.pathname === "/" ? (
          <Typography variant="body1" sx={{ fontSize: "2rem" }}>
            Lista
          </Typography>
        ) : (
          <RouterLink to={`/`} style={{ fontSize: "2rem", cursor: "pointer" }}>
            <Typography
              sx={{
                ":hover": { color: "red" },
                cursor: "pointer",
                color: "olive",
                fontSize: "2rem",
              }}
            >
              Lista
            </Typography>
          </RouterLink>
        )}

        {crumbsToPrint}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
