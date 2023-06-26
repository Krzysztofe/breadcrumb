import LoadingSpinner from "../../components/LoadingSpinner";

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
      <LoadingSpinner />
    </main>
  );
};

export default LoadingPage;
