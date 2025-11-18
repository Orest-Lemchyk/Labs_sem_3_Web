import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import { ShoesContext } from "../../context/ShoesContext/ShoesContext";
import Loader from "../../components/Loader/Loader";
import "./Home.css";

function Home() {
  const { shoes, loading } = useContext(ShoesContext);
  const [visibleCount, setVisibleCount] = useState(5);

  if (loading) return <Loader />;

  const visibleShoes = shoes.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to ShoeStore!</h2>
        <p>
          Find your perfect shoes here. Browse our catalog for the latest and most popular models!
        </p>
      </section>

      <section className="popular">
        <h3>Popular Shoes</h3>

        <div className="shoe-grid">
          {visibleShoes.map((shoe) => (
            <ShoeCard key={shoe.id} id={shoe.id} {...shoe} />
          ))}
        </div>

        {visibleCount < shoes.length && (
          <div className="view-more">
            <PrimaryButton onClick={handleViewMore}>View more</PrimaryButton>
          </div>
        )}

        <p>Browse more models!</p>
        <Link to="/catalog">
          <PrimaryButton>Go to Catalog</PrimaryButton>
        </Link>
      </section>
    </div>
  );
}

export default Home;
