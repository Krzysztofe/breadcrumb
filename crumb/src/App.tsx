
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const IndexTable = lazy(() => import("../src/pages/table/IndexTable"));
const AuthorDetails = lazy(() => import("../src/pages/authorDetails/AuthorDetails"));
const CoverBookDetails = lazy(
  () => import("../src/pages/coverBookDetails/CoverBookDetails")
);



function App() {
  return (
    <BrowserRouter basename="/crumb">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexTable />} />
          <Route path="/:authorURL" element={<IndexTable />} />
          <Route path="/:authorURL/:coverURL" element={<CoverBookDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
