
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const IndexTable = lazy(() => import("../src/pages/table/IndexTable"));



function App() {
  return (
    <BrowserRouter basename="/crumb">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexTable />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
