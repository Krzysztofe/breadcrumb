import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingPage = () => {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <CircularProgress color="inherit" />
      </Box>
    </main>
  );
};

export default LoadingPage;
