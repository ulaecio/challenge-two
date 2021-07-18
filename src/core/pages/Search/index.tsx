import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import "./styles.css";

function Search() {
  const [login, setLogin] = useState(null);
  const [name, setName] = useState("");

  async function handleGetLogin(event: any) {
    event.preventDefault();
    const response = await api.get(name);
    console.log(response.data);
    setLogin(response.data);
  }

  useEffect(() => {
    // handleGetLogin()
  }, []);

  return (
    <div className="search-container ">
        <div className="search-content ">
      <form onSubmit={handleGetLogin}>
          <div className="search-text-title ">
            <h1>Encontre um perfil GitHub</h1>
          </div>
          <div>
          <input
            className="search-form "
            type="text"
            value={name}
            placeholder="Buscar usuário github"
            onChange={(event) => setName(event.target.value)}
            />
          </div>
        <Link to="/search/profile">
        <button className="btn">
          Comecar
      </button>
        </Link>
      </form>
        </div>
    </div>
  );
}

export default Search;
