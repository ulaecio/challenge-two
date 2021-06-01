import React from "react";
import "./styles.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-content">
        <h1 className="search-text-title">
          Encontre um perfil Github
        </h1>

        <input className="search-form" type="text" placeholder="Buscar usuário github"/>

      </div>
      <button className="search-btn">
        <h1 className="search-btn-text">Encontrar</h1>
      </button>

    </div>
  );
};

export default Search;