
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const IndexTable = lazy(() => import("../src/pages/table/IndexTable"));
const AuthorDetails = lazy(() => import("../src/pages/authorDetails/AuthorDetails"));



function App() {
  return (
    <BrowserRouter basename="/crumb">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexTable />} />
          <Route path="/:authorURL" element={<AuthorDetails />} />
          <Route path="/:authorURL/:coverURL" element={<AuthorDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
