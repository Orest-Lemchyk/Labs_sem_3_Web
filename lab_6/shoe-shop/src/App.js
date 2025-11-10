import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigations/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
