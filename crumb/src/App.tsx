import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const IndexHome = lazy(() => import("./pages/home/IndexHome"));
const BookDetails = lazy(
  () => import("./pages/bookDetails/BookDetails")
);
const IndexAuthorDetails = lazy(() => import("./pages/authorDetails/IndexAuthorDetails"));
const CoverBookDetails = lazy(
  () => import("../src/pages/coverBookDetails/CoverBookDetails")
);

function App() {
  return (
    <BrowserRouter basename="/lista">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/books/:bookIdUrl" element={<BookDetails />} />
          <Route path="/author/:authorUrl" element={<IndexAuthorDetails />} />
          <Route
            path="/author/:authorUrl/:bookIdUrl"
            element={<BookDetails />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
