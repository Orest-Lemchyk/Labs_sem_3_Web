import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ShoeList from "./components/ShoeList/ShoeList";
import Footer from "./components/Footer/Footer";
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
