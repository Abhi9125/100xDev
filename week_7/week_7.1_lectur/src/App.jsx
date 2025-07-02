import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DashBoard from "./component/DashBoard";
import LandingPage from "./component/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dash" element={<DashBoard />} />
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
