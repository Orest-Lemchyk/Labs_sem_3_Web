import React from "react";
import ShoeCard from "../../components/ShoeCard/ShoeCard.js";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton.jsx";
import "./Catalog.css";

const shoes = [
    { producer: "Nike", price: 2500, size: 42, color: "black", image: "https://frenchcrown.com/cdn/shop/files/FT-220_2.jpg?v=1718959986&width=1200" },
    { producer: "Adidas", price: 2200, size: 41, color: "white", image: "https://www.topoathletic.com/sca-product-images/M069.Blue-Orange_00.jpg?resizeid=12&resizeh=1586&resizew=1586" },
    { producer: "Puma", price: 1800, size: 43, color: "green", image: "https://cdn.fleetfeet.com/productTile/products/1162030-ALF_1-copy.jpg" },
    { producer: "Reebok", price: 2000, size: 44, color: "blue", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/378301/21/sv01/fnd/PHL/fmt/png/X-Cell-Action-Running-Shoes" },
    { producer: "Under Armour", price: 2700, size: 45, color: "red", image: "https://m.media-amazon.com/images/I/71oqduXWKSL._AC_SY695_.jpg" },
    { producer: "New Balance", price: 2300, size: 42, color: "black", image: "https://cdn.fleetfeet.com/productTile/products/1162030-ALF_1-copy.jpg" },
    { producer: "Converse", price: 1600, size: 40, color: "white", image: "https://www.topoathletic.com/sca-product-images/M069.Blue-Orange_00.jpg?resizeid=12&resizeh=1586&resizew=1586" },
    { producer: "Vans", price: 1900, size: 41, color: "gray", image: "https://cdn.fleetfeet.com/productTile/products/1162030-ALF_1-copy.jpg" },
    { producer: "Asics", price: 2100, size: 43, color: "blue", image: "https://www.topoathletic.com/sca-product-images/M069.Blue-Orange_00.jpg?resizeid=12&resizeh=1586&resizew=1586" },
    { producer: "Fila", price: 1700, size: 42, color: "red", image: "https://frenchcrown.com/cdn/shop/files/FT-220_2.jpg?v=1718959986&width=1200" },
    { producer: "Skechers", price: 2400, size: 44, color: "black", image: "https://m.media-amazon.com/images/I/71oqduXWKSL._AC_SY695_.jpg" },
    { producer: "Mizuno", price: 2600, size: 45, color: "green", image: "https://m.media-amazon.com/images/I/71oqduXWKSL._AC_SY695_.jpg" },
    { producer: "Brooks", price: 2500, size: 42, color: "white", image: "https://www.topoathletic.com/sca-product-images/M069.Blue-Orange_00.jpg?resizeid=12&resizeh=1586&resizew=1586" },
    { producer: "Jordan", price: 3200, size: 43, color: "red", image: "https://frenchcrown.com/cdn/shop/files/FT-220_2.jpg?v=1718959986&width=1200" },
    { producer: "Balenciaga", price: 12000, size: 44, color: "black", image: "https://www.topoathletic.com/sca-product-images/M069.Blue-Orange_00.jpg?resizeid=12&resizeh=1586&resizew=1586" },
    { producer: "Gucci", price: 14000, size: 45, color: "white", image: "https://frenchcrown.com/cdn/shop/files/FT-220_2.jpg?v=1718959986&width=1200" },
  ];

function Catalog() {
  return (
    <div className="catalog-page">
      <h2>Catalog</h2>
      <div className="filters">
        <PrimaryButton>Filter by Price</PrimaryButton>
        <PrimaryButton>Filter by Size</PrimaryButton>
        <PrimaryButton>Filter by Color</PrimaryButton>
      </div>
      <div className="shoe-grid">
        {shoes.map((shoe, index) => (
          <ShoeCard key={index} {...shoe} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
