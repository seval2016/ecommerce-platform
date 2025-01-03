import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import UserAuthentication from "userAuthentication/UserAuthentication";

const Products = React.lazy(() => import("productList/Products"));
const ShoppingCart = React.lazy(() => import("shoppingCart/ShoppingCart"));
const OrderHistory = React.lazy(() => import("orderHistory/OrderHistory"));
const UserAuthentication = React.lazy(
  () => import("userAuthentication/UserAuthentication")
);

import "./index.scss";

const App = () => (
  <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/auth" element={<UserAuthentication />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </Router>
    </Suspense>
    <Footer />
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
