import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Components from "./pages/Components";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Animation from "./pages/Animation";
import ForwardToHome from "./pages/ForwardToHome";
import AppLayout from "./layouts/AppLayout";
import Todos from "./pages/Todos";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import { CartProvider } from "./data/CartContext";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename="/csi205/">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="components" element={<Components />} />
            <Route path="animation" element={<Animation />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="todos" element={<Todos />} />
            <Route path="products" element={<Products />} />
            <Route path="carts" element={<Carts />} />
            <Route path="*" element={<ForwardToHome />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
