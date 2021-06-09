import React from "react";
import "./styles.css";

const Search = () => {

  return (
    <div className="search-container ">
      <div className="search-content ">
        <div className="search-text-title ">
        <h1>Encontre um perfil Github</h1>
        </div>

        <div>
        <input
          className="search-form "          
          type="text" 
          placeholder="Buscar usuário github"
          />
          </div>
          <div>
          <a href="/Search/profile">
      <button className="search-btn " placeholder="none">
      Encontrar
      </button>
        </a>
          </div>
      </div>
    </div>
  );
};

export default Search;