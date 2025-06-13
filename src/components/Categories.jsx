import React from "react";
import "./Categories.css";

const categories = [
  {
    name: "Men",
    image: require("../assets/cat-men.jpg")
  },
  {
    name: "Women",
    image: require("../assets/cat-women.jpg")
  },
  {
    name: "Kids",
    image: require("../assets/cat-kids.jpg")
  },
  {
    name: "Accessories",
    image: require("../assets/cat-accessories.jpg")
  },
  {
    name: "Beauty",
    image: require("../assets/cat-beauty.jpg")
  },
  {
    name: "Footwear",
    image: require("../assets/cat-footwear.jpg")
  }
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="categories-heading">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
