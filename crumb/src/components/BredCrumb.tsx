import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Bredcrumb = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/").filter(crumb => crumb !== "");

  const crumbsToPrint = crumbs.map((crumb, idx) => {
    currentLink += `/${crumb}`;
    return idx === crumbs.length - 1 ? (
      <Typography>okladka</Typography>
    ) : (
      <RouterLink to={`${currentLink}`}>{crumb}</RouterLink>
    );
  });

  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="bredcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {location.pathname === "/" ? (
          <Typography>Tabela</Typography>
        ) : (
          <RouterLink to={`/`}>Tabela</RouterLink>
        )}

        {crumbsToPrint}
      </Breadcrumbs>
    </Box>
  );
};

export default Bredcrumb;
