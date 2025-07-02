import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const LandingPage = lazy(() => import("./component/LandingPage"));
const DashBoard = lazy(() => import("./component/DashBoard"));

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading...."}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/dash"
          element={
            <Suspense fallback={"loading...."}>
              <DashBoard />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Langing Page</button>
      <button onClick={() => navigate("/dash")}>DashBoard</button>
    </>
  );
}

export default App;
