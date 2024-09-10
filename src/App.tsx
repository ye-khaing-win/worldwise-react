import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Product from "./pages/Product";
import NotFound from "./pages/PageNotFound";
import Home from "./pages/Homepage";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
