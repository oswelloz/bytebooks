import React from "react";
import "../styles/categories.css";

const Categories: React.FC = () => {
  const categories = [
    "All",
    "Biography",
    "Business",
    "Fiction",
    "History",
    "Mystery",
    "Nonfiction",
    "Science",
    "Self-Help",
    "Technology",
  ];
    return (
        <div className="categories-section">
        <div className="categories-container">
            {categories.map((category,index) => (
                <span key={index}>{category}</span>
            ))}
        </div>
        </div>
    );
};

export default Categories;