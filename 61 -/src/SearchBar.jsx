import React from 'react';
import './index.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Pokemon..." />
      {/* Ajouter des fonctionnalités de recherche si nécessaire */}
    </div>
  );
};

export default SearchBar;
