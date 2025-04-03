import React from "react";
import "../styles/categories.css";

const Categories: React.FC = () => {
  const categories = [
    "Data Science",
  "Web Development",
    "Machine Learning",
"Artificial Intelligence",
    "Cloud Computing",
"Cybersecurity",
    "Mobile Development",
    "Game Development",
"Blockchain",
    "DevOps",
"Software Engineering",
    "Database Management",
"Networking",
    "UI/UX Design",
    "Python",
    "JavaScript",
  ];

  return (
    <div className="categories-section">
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </div>
  );
};

export default Categories;
