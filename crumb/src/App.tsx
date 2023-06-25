import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const IndexHome = lazy(() => import("./pages/home/IndexHome"));
const IndexBookDetails = lazy(
  () => import("./pages/bookDetails/IndexBookDetails")
);
const IndexAuthorDetails = lazy(
  () => import("./pages/authorDetails/IndexAuthorDetails")
);

function App() {
  return (
    <BrowserRouter basename="/breadcrumb">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/books/:bookIdUrl" element={<IndexBookDetails />} />
          <Route path="/author/:authorUrl" element={<IndexAuthorDetails />} />
          <Route
            path="/author/:authorUrl/:bookIdUrl"
            element={<IndexBookDetails />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
