import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ShoeList from "./components/ShoeList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <ShoeList />
      <Footer />
    </div>
  );
}

export default App;
