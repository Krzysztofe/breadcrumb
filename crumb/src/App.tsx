import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const IndexHome = lazy(() => import("./pages/home/IndexHome"));
const BookDetails = lazy(
  () => import("./pages/bookDetails/BookDetails")
);
const AuthorDetails = lazy(() => import("./pages/authorDetails/AuthorDetails"));
const CoverBookDetails = lazy(
  () => import("../src/pages/coverBookDetails/CoverBookDetails")
);

function App() {
  return (
    <BrowserRouter basename="/tabela">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/book/:bookIdUrl" element={<BookDetails />} />
          <Route path="/author/:authorUrl" element={<AuthorDetails />} />
          <Route
            path="/author/:authorUrl/:bookIdUrl"
            element={<BookDetails />}
          />

          <Route
            path="/:bookIdUrl/:bookCoverUrl"
            element={<CoverBookDetails />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
