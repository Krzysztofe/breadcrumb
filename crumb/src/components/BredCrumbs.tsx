import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

const Bred = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="bredcrumb" separator={<NavigateNextIcon fontSize="small"/>}>
        <Link underline="hover" href="#">
          home
        </Link>
        <Link underline="hover" href="#">
          home
        </Link>
        <Typography color="text.primary">yo</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Bred;
