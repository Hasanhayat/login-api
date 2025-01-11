import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/product";

function App() {
  return (
    <div className="app">
      <Top />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
