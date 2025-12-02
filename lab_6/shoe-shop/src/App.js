import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigations/Navigation";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
// json-server --watch db.json --port 3001
import store from "./redux/store";
import { ShoesProvider } from "./context/ShoesContext/ShoesContext";

function App() {
  return (
    <Provider store={store}>
      <ShoesProvider>
        <Router>
          <Header />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ShoesProvider>
    </Provider>
  );
}

export default App;
