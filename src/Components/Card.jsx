import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";

// Definir el reducer para manejar las acciones relacionadas con los favoritos
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    default:
      return state;
  }
};

const Card = ({dentist}) => {
  // Inicializar el estado de los favoritos utilizando useReducer
  // Obtener o inicializar el estado de los favoritos utilizando useReducer
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    JSON.parse(localStorage.getItem("storageFavorites")) || []
  );

  const addFav = () => {
     // Verificar si el dentista ya está en favoritos por su ID
     const isDentistInFavorites = favorites.some(
      (fav) => fav.id === dentist.id
    );

    if (!isDentistInFavorites) {
      // Agregar el dentista a la lista de favoritos
      dispatch({ type: "ADD_FAVORITE", payload: dentist });

      // Guardar la lista actualizada en localStorage
      localStorage.setItem(
        "storageFavorites",
        JSON.stringify([...favorites, dentist])
      );
    } else {
      alert("Este dentista ya ha sido agregado a favoritos");
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <h2>{dentist.name}</h2>
      <p>Id: {dentist.id}</p>
      <p>Username: {dentist.username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/Dentist/${dentist.id}`}>Details</Link>
      
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};
export default Card;
