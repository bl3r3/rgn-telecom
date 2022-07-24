import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
