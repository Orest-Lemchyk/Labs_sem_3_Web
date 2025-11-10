import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ShoeList from "../../components/ShoeList/ShoeList";

function Home() {
  return (
    <div>
      <section className="hero">
        <h2>Welcome to ShoeStore!</h2>
        <p>Find your perfect shoes here. Browse our catalog for the latest and most popular models!</p>
      </section>

      <ShoeList />
      <section className="hero">
      <p> Browse more models!</p>
      <Link to="/catalog">
          <PrimaryButton>Go to Catalog</PrimaryButton>
      </Link>
      </section>
    </div>
  );
}

export default Home;
