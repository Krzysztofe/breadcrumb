import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import useDatabaseValues from "../hooks/useDatabaseValues";

const Bredcrumb = () => {
  const { bookIdUrl, bookCoverUrl } = useParams();
  const location = useLocation();
  const { bookDetails } = useDatabaseValues(bookIdUrl);

  const crumbs = location.pathname.split("/").filter(crumb => crumb !== "");

  let typographyContent = bookDetails?.bookTitle || "Brak danych autora";

  if (bookCoverUrl) {
    typographyContent = `Okładka "${bookDetails?.bookTitle}"`;
  }

  let currentLink = "";

  const crumbsToPrint = crumbs.map((crumb, idx) => {
    currentLink += `/${crumb}`;
    return idx > 0 || idx === crumbs.length - 1 ? (
      <Typography key={crypto.randomUUID()}>{typographyContent}</Typography>
    ) : (
      <RouterLink key={crypto.randomUUID()} to={`${currentLink}`}>
        {bookDetails?.bookTitle === undefined
          ? "Brak danych autora"
          : bookDetails?.bookTitle}
      </RouterLink>
    );
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
          <RouterLink to={`/`}>Lista</RouterLink>
        )}

        {crumbsToPrint}
      </Breadcrumbs>
    </Box>
  );
};

export default Bredcrumb;
