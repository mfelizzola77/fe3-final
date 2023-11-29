import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {

  // Obtener la lista de favoritos del localStorage
  const favorites = JSON.parse(localStorage.getItem("storageFavorites")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map( favorite => <Card key={favorite.id} dentist={favorite}/>)}
      </div>
    </>
  );
};

export default Favs;
