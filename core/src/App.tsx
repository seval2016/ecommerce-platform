import React, { Suspense } from "react";
import "./index.scss";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Products = React.lazy(() => import("productList/Products"));
const ShoppingCart = React.lazy(() => import("shoppingCart/ShoppingCart"));
const OrderHistory = React.lazy(() => import("orderHistory/OrderHistory"));
const UserAuthentication = React.lazy(() => import("userAuthentication/UserAuthentication"));

const App = () => (
  <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/auth" element={<UserAuthentication />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>

        <Footer />
      </Router>
    </Suspense>
  </>
);

export default App;
