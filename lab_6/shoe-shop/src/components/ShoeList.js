import React from "react";
import ShoeCard from "./ShoeCard";
import "./ShoeList.css";

function ShoeList() {
    const shoes = [
        { producer: "Nike", price: 2500, size: 42, color: "black", image: "https://frenchcrown.com/cdn/shop/files/FT-220_2.jpg?v=1718959986&width=1200" },
        { producer: "Adidas", price: 2200, size: 41, color: "white", image: "https://www.topoathletic.com/sca-product-images/M069.Blue-Orange_00.jpg?resizeid=12&resizeh=1586&resizew=1586" },
        { producer: "Puma", price: 1800, size: 43, color: "green", image: "https://cdn.fleetfeet.com/productTile/products/1162030-ALF_1-copy.jpg" },
        { producer: "Reebok", price: 2000, size: 44, color: "blue", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/378301/21/sv01/fnd/PHL/fmt/png/X-Cell-Action-Running-Shoes" },
        { producer: "Under Armour", price: 2700, size: 45, color: "red", image: "https://m.media-amazon.com/images/I/71oqduXWKSL._AC_SY695_.jpg" },
      ];
      

  return (
    <section className="shoe-list">
      <h2>Popular Shoes</h2>
      <div className="shoe-grid">
        {shoes.map((shoe, index) => (
          <ShoeCard key={index} {...shoe} />
        ))}
      </div>
    </section>
  );
}

export default ShoeList;
