import React, { useState } from "react";
import "./styles.css";

const Search = () => {
  const [name, setName] = useState('Ul')

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <div className="search-container">
      <div className="search-content">
        <h1 className="search-text-title">
          Encontre um perfil Github
        </h1>

        <input 
          className="search-form" 
          type="text" 
          placeholder="Buscar usuário github"
          onChange={handleOnChange}
          />

      </div>
      <a href="/Search/Form">
      <button className="search-btn">
        <h1 className="search-btn-text">
          Encontrar
        </h1>
      </button>
        </a>

    </div>
  );
};

export default Search;