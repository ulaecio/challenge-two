import React from "react";
import "./styles.css";

const Home = () => {
  return (
      <div className="home-container">
         <div className="home-content">
        <div className="text-title">
        <h1>
          Desafio do Capítulo 3, <br/> Bootcamp DevSuperior
        </h1>
        </div>

        <div className="text-subtitle">
        <p>
          Bem-vindos ao desafio do capítulo 3, <br/> do Bootcamp DevSuperior. <br />
        </p>
        </div>
        <div className="div-btn">
        <a href="/Search">
        <button className="btn">
          Comecar
      </button>
        </a>
        </div>
        </div>
    </div>
  );
};

export default Home;
