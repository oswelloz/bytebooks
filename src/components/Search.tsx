import React from "react";
import "../styles/search.css";
import { FaSearch } from "react-icons/fa";


const Search: React.FC = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <form>
            
        <input
          type="text"
          placeholder="Search for books"
          className="search-input"
        />
        <button type="submit">
          <FaSearch />  
        </button>
        
        </form>
      </div>
    </div>
  )
}

export default Search
