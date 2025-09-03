import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { AllBlogs } from "./pages/AllBlogs";
import { Blog } from "./pages/Blog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
